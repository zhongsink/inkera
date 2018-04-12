const Models = require('../models');
const Logger = require('../utils/Logger');

async function findComments(params) {
  let result = [];
  let comments = await Models.Comment.findAll({
    where: {
      ArticleId: params.article
    },
    order: [
      ['id', 'DESC']
    ]
  });
  for (let comment of comments) {
    user = await Models.User.findOne({
      where: {
        id: comment.UserId
      }
    })
    result.push({
      comment,
      user: {
        id: user.id,
        name: user.name,
        username: user.usename,
        portrait: user.portrait,
        authentication_token: user.authentication_token
      }
    });
  }
  return result;
}
/**
 * content: DataTypes.TEXT,
 * ArticleId: DataTypes.INTEGER,
 * UserId: DataTypes.INTEGER
 */
async function addComment(ctx) {
  let body = ctx.request.body;
  try {
    await Models.Comment.create({
      content: body.content,
      ArticleId: body.id,
      UserId: body.userId
    });
    let result = await findComments({
      article: body.id
    })
    ctx.body = {
      status: true,
      list: result
    }
  } catch (error) {
    Logger.error(`add comment: ${error.message}`);
    ctx.body = {
      status: false
    }
    ctx.status = 200;
  }
}

/**
 * QuestionId: DataTypes.INTEGER,
 */
async function allComment(ctx) {
  let params = ctx.query;
  let result = [];
  try {
    result = await findComments(params)
    ctx.body = {
      status: true,
      list: result
    }
  } catch (error) {
    Logger.error(`conment list: ${error.message}`);
    ctx.body = {
      status: false
    };
  }
  ctx.status = 200;
}

let comment = {
  addComment,
  allComment
}

module.exports = comment