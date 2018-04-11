const Models = require('../models');
const Logger = require('../utils/Logger');

/**
 * content: DataTypes.TEXT,
 * QuestionId: DataTypes.INTEGER,
 * UserId: DataTypes.INTEGER
 */
async function addComment(ctx) {
  let body = ctx.request.body;
  try {
    await Models.Answer.create({
      content: body.content,
      ArticleId: body.articleId,
      UserId: body.userId
    });
    ctx.body = {
      status: true
    }
  } catch (error) {
    Logger.error(`add comment: ${error.message}`);
    ctx.body = {
      status: false
    }
  }
}

/**
 * QuestionId: DataTypes.INTEGER,
 */
async function AllComment(ctx) {
  let body = ctx.request.body;
  let result = [];
  try {
    let comments = await Models.Comment.findAll({
      where: {
        ArticleId: body.articleId
      }
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
  AllComment
}

module.exports = comment