const Models = require('../models');
const Logger = require('../utils/Logger');

async function updateProfile(ctx) {
  let body = ctx.request.body;
  try {
    let user = await Models.User.findOne({
      where: {
        authentication_token: body.authentication_token
      }
    })
    if (body.field === 'name') {
      await user.update({
        name: body.value
      })
    } else {
      let profile = await Models.Profile.findOne({
        where: {
          UserId: user.id
        }
      })
      await profile.update({
        [`${body.field}`]: body.value
      })
    }
    ctx.body = {　
      status: true
    }
  } catch (error) {
    Logger.error(error.message);
    ctx.body = {　
      status: false,
      message: '数据库更新失败'
    }
  }
  ctx.status = 200;
}

async function updateAvatar(ctx) {
  let body = ctx.request.body;
  try {
    await Models.User.update({
      portrait: body.url
    }, {
      where: {
        authentication_token: body.token
      }
    });
    ctx.body = {
      status: true
    }
  } catch (error) {
    ctx.body = {
      status: false
    }
  }
  ctx.status = 200;
}

let profile = {
  updateProfile,
  updateAvatar
}

module.exports = profile