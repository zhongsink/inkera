const Models = require('../models');
const Logger = require('../utils/Logger');

async function getAllQuestion(ctx) {
  let page = ctx.query.page || 1;
  try {
    let questions = await Models.Question.findAll({
      offset: 20 * (page - 1),
      limit: 20
    });
    ctx.body = {
      status: true,
      list: questions
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
  try {
    let question = await Models.Question.findOne({
      where: {
        id: params.id
      }
    });
    ctx.body = {
      status: true,
      list: question
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
  let params = {
    title: body.title,
    content: body.content,
    check: 0,
    heats: 0,
    UserId: body.userId,
  }
  try {
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

let question = {
  getAllQuestion,
  getAnQuestion,
  addQuestion,
  delQuestion
}

module.exports = question