const Models = require('../models');
const Logger = require('../utils/Logger');

async function getAllArtcle(ctx) {
  let page = ctx.params.page || 1;
  try {
    let articles = await Models.Article.findAll({ offset: 20*(page-1), limit: 20 });
    ctx.body = {
      status: true,
      list: articles
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
  let body  = ctx.request.body;
  let params = {
    title: body.title,
    content: body.content,
    lable: body.lable,
    check: 0,
    heats: 0,
    UserId: body.userId,
  }
  try {
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
  let body = ctx.request.body;
  try {
    let article = await Models.Article.findOne({
      where: {
        id: body.id
      }
    });
    ctx.body = {
      status: true,
      list: article
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
  let body  = ctx.request.body;
  try {
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
  let body  = ctx.request.body;;
  try {
    await Models.Article.update({
      content: body.content
    });
    ctx.body = {
      status: true,
      message: '更新成功'
    }
  } catch (error) {
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
  updateArtcle
}
  
module.exports = article