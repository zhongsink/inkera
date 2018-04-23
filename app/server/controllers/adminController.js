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
    let result = await Models[`${params.obj}`].findAll({
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

async function addAd(ctx) {
  try {
    await Models.Ad.create({
      title: '腾讯云　容器服务 CCS',
      url: 'https://cloud.tencent.com/product/ccs',
      imgUrl: '/public/img/6c80707.jpg'
    })
    ctx.body = {
      status: true
    };
  } catch (error) {
    ctx.body = {
      status: false
    };
  }
  ctx.status = 200;
}

async function adminUser(ctx) {
  let tooken = ctx.cookies.get('inkera-user-id') || '';
  if (!tooken) {
    ctx.body = {
      status: false
    };
    ctx.status = 200;
    return;
  }
  let params = {
    where: {
      authentication_token: tooken
    },
    attributes: [
      'id', 'name', 'usename', 'email', 'authentication_token', 'portrait', 'role'
    ]
  }
  try {
    user = await Models.User.findOne(params);
    ctx.body = {
      status: true,
      result: user
    };
  } catch (error) {
    Logger.error(error.message);
    ctx.body = {
      status: false
    };
  }
  ctx.status = 200;
}

module.exports = {
  objList,
  addAd,
  adminUser,
}