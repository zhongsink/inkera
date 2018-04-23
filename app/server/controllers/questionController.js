const Models = require('../models');
const Logger = require('../utils/Logger');

async function getAllQuestion(ctx) {
  let page = ctx.query.page || 1;
  let result = [];
  let userArray = [];
  try {
    let questions = await Models.Question.findAll({
      offset: 20 * (page - 1),
      limit: 20,
      order: [
        ['id', 'DESC']
      ],
      attributes: [
        'id', 'title', 'check', 'heats', 'UserId', 'createdAt'
      ]
    });

    for (let question of questions) {
      let user;
      if (userArray[question.UserId]) {
        user = userArray[question.UserId]
      } else {
        userArray[question.UserId] = user = await Models.User.findOne({
          where: {
            id: question.UserId
          }
        })
      }

      result.push({
        question,
        user: {
          id: user.id,
          name: user.name,
          username: user.usename,
          portrait: user.portrait,
          authentication_token: user.authentication_token
        }
      });

    }
    ctx.body = {
      status: true,
      list: result
    }
  } catch (error) {
    Logger.error(`find questions:${error.message}`);
    ctx.body = {
      status: false,
      message: '数据库查询错误!'
    }
  }
  ctx.status = 200;
}
/**
 * 
 * @param {*} ctx 
 * ctx.body ={ id: number }
 */
async function getAnQuestion(ctx) {
  let params = ctx.query;
  let resule = {};
  try {
    let question = await Models.Question.findOne({
      where: {
        id: params.id
      }
    });
    let user = await Models.User.findOne({
      where: {
        id: question.UserId
      }
    })
    let profile = await Models.Profile.findOne({
      where: {
        UserId: user.id
      }
    })
    result = {
      question: question,
      user: {
        id: user.id,
        name: user.name,
        username: user.usename,
        portrait: user.portrait,
        email: user.email,
        authentication_token: user.authentication_token,
        profile: profile
      }
    }
    ctx.body = {
      status: true,
      result: result
    }
  } catch (error) {
    Logger.error(`find question:${error.message}`);
    ctx.body = {
      status: false,
      message: '数据库查询错误!'
    }
  }
  ctx.status = 200;
}
/** post
 * @param {*} ctx 
 * ctx.body = {
 *  title: not null
 *  content: not null
 *  check: default
 *  heats: default
 *  UserId: not null
 * }
 */
async function addQuestion(ctx) {
  let body = ctx.request.body;
  try {
    let user = await Models.User.findOne({
      where: {
        authentication_token: body.authentication_token
      }
    });
    let params = {
      title: body.title,
      content: body.content,
      check: 0,
      heats: 0,
      UserId: user.id,
    }
    await Models.Question.create(params);
    ctx.body = {
      status: true,
      message: '创建成功'
    }
  } catch (error) {
    Logger.error(`add an question:${error.message}`);
    ctx.body = {
      status: false,
      message: '创建失败'
    }
  }
  ctx.status = 200;
}

/** 
 * post
 * @param {*} ctx 
 * ctx.body = {
 *  id: number
 * }
 */
async function delQuestion(ctx) {
  let body = ctx.request.body;
  try {
    await Models.Answer.destroy({
      where: {
        QuestionId: body.id
      }
    })
    await Models.Question.destroy({
      where: {
        id: body.id
      }
    })
    ctx.body = {
      status: true,
      message: '删除成功'
    }
  } catch (error) {
    Logger.error(`delete an Question:${error.message}`);
    ctx.body = {
      status: false,
      message: '创建失败'
    }
  }
  ctx.status = 200;
}

async function recommendedQuestions(ctx) {
  try {
    let questions = await Models.Question.findAll({
      limit: 5,
      order: [
        ['heats', 'DESC'],
        ['id', 'DESC']
      ],
      attributes: [
        'id', 'title', 'check', 'heats', 'UserId', 'createdAt'
      ]
    });
    ctx.body = {
      status: true,
      result: questions
    }
  } catch (error) {
    Logger.error(error.message);
    ctx.body = {
      status: false,
      message: '查询失败'
    }
  }
  ctx.status = 200;
}

async function recommend(ctx){
  let body = ctx.request.body;
  try {
    await Models.Question.update({
      heats: 10
    }, {
      where: {
        id: body.id
      }
    });
    ctx.body = {
      status: true,
      message: '更新成功'
    }
  } catch (error) {
    Logger.error(`update artcle: ${error.message}`)
    ctx.body = {
      status: false,
      message: '更新失败'
    }
  }
  ctx.status = 200;
}

let question = {
  getAllQuestion,
  getAnQuestion,
  addQuestion,
  delQuestion,
  recommend,
  recommendedQuestions
}

module.exports = question