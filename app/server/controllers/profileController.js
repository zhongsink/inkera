const Models = require('../models');
const Logger = require('../utils/Logger');

async function updateProfile(ctx) {
  let body = ctx.request.body;
  try {
    await Models.Profile.update({
      [`${body.field}`]: body.value
    })
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

let profile = {
  updateProfile,
}

module.exports = profile