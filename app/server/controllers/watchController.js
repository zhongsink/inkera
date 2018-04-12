const Models = require('../models');
const Logger = require('../utils/Logger');

/**
 * @param {*} params 
 * ArticleId: DataTypes.INTEGER,
 *  UserId: DataTypes.INTEGER
 */
async function watchsList(params) {
  let result = 0;
  try {
    result = await Models.Like.count({
      where: {
        ArticleId: params.article
      }
    })
    return result;
  } catch (error) {
    Logger.error(error.message);
    return;
  }
}

async function toggle(ctx) {
  let body = ctx.request.body;
  let wacth;
  let params = {
    ArticleId: body.articleId,
    UserId: body.userId
  }
  try {
    let hasWatch = await Models.Like.destroy({
      where: params
    })
    if (hasWatch) {
      wacth = false;
    } else {
      await Models.Like.create(params);
      wacth = true;
    }
    let number = await watchsList({
      article: body.articleId
    })
    ctx.body = {
      status: true,
      wacth: wacth,
      number: number
    }
  } catch (error) {
    Logger.error(error.message)
    ctx.body = {
      status: false
    }
  }
  ctx.status = 200;
}

async function allWatchs(ctx) {
  let params = ctx.query;
  try {
    let wacths = await watchsList({
      article: params.article
    });
    let hasWatch = await Models.Like.findAll({
      where: {
        ArticleId: params.article,
        UserId: params.user
      }
    })
    ctx.body = {
      status: true,
      wacth: JSON.stringify(hasWatch) !== '{}' ? true : false,
      number: wacths
    }
  } catch (error) {
    Logger.error(error.message);
    ctx.body = {
      status: false
    }
  }
  ctx.status = 200;
}

module.exports = {
  toggle,
  allWatchs
}