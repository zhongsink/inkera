const Models = require('../models');
const Logger = require('../utils/Logger');
const md5 = require('../utils/md5')
async function Login(ctx) {
  try {
    let body = ctx.request.body;
    let params = {
      where: {
        email: body.email,
        encrypted_password: md5(body.password)
      }
    }
    let user = await Models.User.findOne(params);
    if (!user) throw new Error('email or password error');
    ctx.cookies.set('inkera-user-id', user.authentication_token);
    ctx.body = {
      status: true,
      message: {
        login: true,
        name: user.name,
        usename: user.usename,
        email: user.email,
        authentication_token: user.authentication_token
      }
    };
    ctx.status = 200;
  } catch (e) {
    Logger.error('UserController/Login error: ' + e.message);
    ctx.body = {
      status: 0,
      message: e.message
    };
    ctx.status = 200;
  }
}

async function SignUp(ctx) {
  try {
    let body = ctx.request.body;
    let token = md5(+new Date() + '');
    let params = {
      name: body.name,
      usename: body.username,
      email: body.email,
      encrypted_password: md5(body.password),
      authentication_token: token
    }
    await Models.User.create(params);
    ctx.cookies.set('inkera-user-id', token);
    ctx.body = {
      status: true,
      message: {
        login: true,
        name: body.name,
        usename: body.usename,
        email: body.email,
        authentication_token: token
      }
    };
    ctx.status = 200;
  } catch (e) {
    Logger.error('UserController/SignUp error: ' + e.message);
    ctx.body = {
      status: 0,
      message: e.message
    };
    ctx.status = 200;
  }
}
async function getCurrentUser(ctx) {
  let tooken = ctx.cookies.get('inkera-user-id') || '';
  let user = null,
    profile = null;
  if (tooken) {
    let params = {
      where: {
        authentication_token: tooken
      }
    }
    try {
      user = await Models.User.findOne(params);
      profile = await Models.Profile.findOrCreate({
        where: {
          UserId: user.id
        },
        defaults: {
          position: '学生',
          company: 'jscode社区',
          introduction: '人生苦短，码不停蹄'
        }
      })
      if (user && profile[0]) {
        currentUser = {
          login: true,
          name: user.name,
          usename: user.usename,
          email: user.email,
          authentication_token: user.authentication_token,
          phone: profile[0].phone,
          github: profile[0].github,
          position: profile[0].position,
          company: profile[0].company,
          introduction: profile[0].introduction,
          website: profile[0].website
        }
        ctx.body = {
          status: 1,
          user: currentUser
        };
      } else {
        ctx.body = {
          status: 0,
          user: {
            login: false
          }
        };
      }
    } catch (error) {
      Logger.error(`user finding: ${error.message}`);
      ctx.status = 500;
    }
  } else {
    ctx.body = {
      status: 0,
      user: {
        login: false
      }
    };
  }
  ctx.status = 200;
}

async function getUserInfo(ctx) {
  let tooken = ctx.query.hash
  let user = null,
    profile = null,
    userObj = {};
  try {
    user = await Models.User.findOne({
      where: {
        authentication_token: tooken
      }
    });
    profile = await Models.Profile.findOne({
      where: {
        UserId: user.id
      }
    })
    if (user && profile) {
      userObj = {
        id: user.id,
        name: user.name,
        usename: user.usename,
        email: user.email,
        authentication_token: user.authentication_token,
        phone: profile.phone,
        github: profile.github,
        position: profile.position,
        company: profile.company,
        introduction: profile.introduction,
        website: profile.website
      }
      ctx.body = {
        status: 1,
        user: userObj
      };
    } else {
      ctx.body = {
        status: 0,
        user: {
          login: false
        }
      };
    }
  } catch (error) {
    Logger.error(`user finding: ${error.message}`);
    ctx.status = 500;
  }
  ctx.status = 200;
}
let user = {
  Login,
  SignUp,
  getCurrentUser,
  getUserInfo
}

module.exports = user