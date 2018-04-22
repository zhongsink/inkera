const Models = require('../models');
const Logger = require('../utils/Logger');

const Attr = {
  User: [
    ['id', 'key'], 'name', ['usename', 'username'], 'email', ['authentication_token', 'token']
  ],
  Article: [
    ['id', 'key'], 'title', 'lable', ['UserId', 'userId']
  ],
  Question: [
    ['id', 'key'], 'title', ['UserId', 'userId']
  ],
  Recruit: [
    ['id', 'key'], 'title', 'from', 'url'
  ]
}
/**
 * 
 * @param {query} ctx 
 */

async function objList(ctx) {
  let params = ctx.query;
  if (['User', 'Article', 'Question', 'Recruit'].indexOf(params.obj) === -1) {
    ctx.body = {
      status: false,
      message: '请求参数有误'
    };
  }
  try {
    let result= await Models[`${params.obj}`].findAll({
      attributes: Attr[`${params.obj}`]
    })
    ctx.body = {
      status: true,
      list: result
    };
  } catch (error) {
    Logger.error(error.message);
    ctx.body = {
      status: false,
      message: '后端发生了错误'
    };
  }
  ctx.status = 200;
}

module.exports = {
  objList,
}