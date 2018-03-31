const Models = require('../models');
const Logger = require('../utils/Logger');
const md5 = require('../utils/md5')
async function Login(ctx) {
  try {
    let body  = ctx.request.body;
    let params = { where: {email: body.email, encrypted_password: md5(body.password)}}
    let user = await Models.User.findOne(params);
    if (!user) throw new error('email or password error');
    ctx.cookies.set('inkera-user-id', user.authentication_token);
    ctx.body = {
      status: true,
      message: {
        name: user.name,
        usename: user.usename,
        email: user.email
      }
    };
    ctx.status = 200;
  } catch(e) {
    Logger.error('UserController/Login error: '+ e.message);
    ctx.body = {
      status: 0,
      message: e.message
    };
    ctx.status = 200;
  }
}

async function SignUp(ctx) {
  try {
    let body  = ctx.request.body;
    let token = md5(+new Date()+'');
    let params = {
      name: body.name,
      usename: body.usename,
      email: body.email,
      encrypted_password: md5(body.password),
      authentication_token: token
    }
    await Models.User.create(params);
    ctx.cookies.set('inkera-user-id', token);
    ctx.body = {
      status: true,
      message: {
        name: body.name,
        usename: body.usename,
        email: body.email
      }
    };
    ctx.status = 200;
  } catch (e){
    Logger.error('UserController/SignUp error: '+ e.message);
    ctx.body = {
      status: 0,
      message: e.message
    };
    ctx.status = 200;
  }
}

let user = {
  Login,
  SignUp
}

module.exports = user