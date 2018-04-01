const Models = require('../models');
const Logger = require('../utils/Logger');

async function getAllRecruit(ctx) {
  let page = ctx.params.page || 1;
  try {
    let recruits = await Models.Recruit.findAll({
      offset: 20 * (page - 1),
      limit: 20
    });
    ctx.body = {
      status: true,
      list: recruits
    }
  } catch (error) {
    Logger.error(`find Recruits:${error.message}`);
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
async function getAnRecruit(ctx) {
  let body = ctx.request.body;
  try {
    let recruit = await Models.Recruit.findOne({
      where: {
        id: body.id
      }
    });
    ctx.body = {
      status: true,
      list: recruit
    }
  } catch (error) {
    Logger.error(`find Recruit:${error.message}`);
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
 *  from: string,
 *  url: string,
 * }
 */
async function addRecruit(ctx) {
  let body = ctx.request.body;
  let params = {
    title: body.title,
    content: body.content,
    check: 0,
    form: body.form,
    url: body.url
  }
  try {
    await Models.Recruit.create(params);
    ctx.body = {
      status: true,
      message: '创建成功'
    }
  } catch (error) {
    Logger.error(`add an Recruit:${error.message}`);
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
async function delRecruit(ctx) {
  let body = ctx.request.body;
  try {
    await Models.Recruit.destroy({
      where: {
        id: body.id
      }
    })
    ctx.body = {
      status: true,
      message: '删除成功'
    }
  } catch (error) {
    Logger.error(`delete an Recruit:${error.message}`);
    ctx.body = {
      status: false,
      message: '创建失败'
    }
  }
  ctx.status = 200;
}

let recruit = {
  getAllRecruit,
  getAnRecruit,
  addRecruit,
  delRecruit
}

module.exports = recruit