const Models = require('../models');
const Logger = require('../utils/Logger');

async function getAllArtcle(ctx) {
  let page = ctx.query.page || 1;
  let result = [];
  let userArray = [];

  try {
    let articles = await Models.Article.findAll({
      offset: 20 * (page - 1),
      limit: 20,
      order: [
        ['id', 'DESC']
      ],
      attributes: [
        'id', 'title', 'lable', 'check', 'heats', 'UserId', 'createdAt'
      ]
    });

    for (let article of articles) {
      let user;
      if (userArray[article.UserId]) {
        user= userArray[article.UserId]
      } else {
        userArray[article.UserId] = user = await Models.User.findOne({
          where: {
            id: article.UserId
          }
        })
      }

      result.push({
        article,
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
    Logger.error(`find articles:${error.message}`);
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
 *  lable: not null
 *  check: default
 *  heats: default
 *  UserId: not null
 * }
 */
async function addArtcle(ctx) {
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
      lable: body.label,
      check: 0,
      heats: 0,
      UserId: user.id,
    }
    await Models.Article.create(params);
    ctx.body = {
      status: true,
      message: '创建成功'
    }
  } catch (error) {
    Logger.error(`add an article:${error.message}`);
    ctx.body = {
      status: false,
      message: '创建失败'
    }
  }
  ctx.status = 200;
}

/**
 * 
 * @param {*} ctx 
 * ctx.body ={ id: number }
 */
async function getAnArticle(ctx) {
  let params = ctx.query;
  let result = {};
  try {
    let article = await Models.Article.findOne({
      where: {
        id: params.id
      }
    });
    let user = await Models.User.findOne({
      where: {
        id: article.UserId
      }
    })
    let profile = await Models.Profile.findOne({
      where: {
        UserId: user.id
      }
    })
    result = {
      article: article,
      user: {
        id: user.id,
        name: user.name,
        username: user.usename,
        portrait: user.portrait,
        email: user.email,
        authentication_token: user.authentication_token,
        profile: profile
      },
    }
    ctx.body = {
      status: true,
      result: result
    }
  } catch (error) {
    Logger.error(`find Article:${error.message}`);
    ctx.body = {
      status: false,
      message: '数据库查询错误!'
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
async function delArtcle(ctx) {
  let body = ctx.request.body;
  try {
    await Models.Comment.destroy({
      where: {
        ArticleId: body.id
      }
    })
    await Models.Like.destroy({
      where: {
        ArticleId: body.id
      }
    })
    await Models.Article.destroy({
      where: {
        id: body.id
      }
    })
    ctx.body = {
      status: true,
      message: '删除成功'
    }
  } catch (error) {
    Logger.error(`delete an article:${error.message}`);
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
 *  content: text(mardown)
 * }
 */
async function updateArtcle(ctx) {
  let body = ctx.request.body;
  try {
    await Models.Article.update({
      content: body.content
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
async function recommendedArticles(ctx) {
  try {
    let articles = await Models.Article.findAll({
      limit: 5,
      order: [
        ['heats', 'DESC'],
        ['id', 'DESC']
      ],
      attributes: [
        'id', 'title', 'lable', 'check', 'heats', 'UserId', 'createdAt'
      ]
    });
    ctx.body = {
      status: true,
      result: articles
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
    await Models.Article.update({
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

let article = {
  getAllArtcle,
  getAnArticle,
  addArtcle,
  delArtcle,
  updateArtcle,
  recommend,
  recommendedArticles
}

module.exports = article