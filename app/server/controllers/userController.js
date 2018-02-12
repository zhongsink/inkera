const Models = require('../models');
const Logger = require('../utils/Logger');
async function Login(ctx) {
  try {
    let body  = ctx.request.body;
    let params = { where: {email: body.email, password: body.password}}
    let user = await Models.User.findOne(params);
    if (user) throw new error('email or password error');
    ctx.body = {
      status: 1,
      message: '登录成功'
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
    let params = {
      name: body.name,
      usename: body.usename,
      email: body.email,
      encrypted_password: body.password,
      authentication_token: body.password
    }
    await Models.User.create(params);
    ctx.body = {
      status: true,
      message: 'success'
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