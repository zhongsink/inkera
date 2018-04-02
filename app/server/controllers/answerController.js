const Models = require('../models');
const Logger = require('../utils/Logger');

/**
 * content: DataTypes.TEXT,
 * QuestionId: DataTypes.INTEGER,
 * UserId: DataTypes.INTEGER
 */
async function addAnswer(ctx) {
  let body = ctx.request.body;
  try {
    await Models.Answer.create({
      content: body.content,
      QuestionId: body.questionId,
      UserId: body.userId
    });
    ctx.body = {
      status: true,
      message: '新建成功'
    }
  } catch (error) {
    Logger.error(`add an answer: ${error.message}`);
    ctx.body = {
      status: false,
      message: '新建失败'
    }
  }
}

/**
 * QuestionId: DataTypes.INTEGER,
 */
async function AllAnswerInQuestion(ctx) {
  let body = ctx.request.body;
  try {
    answers = await Models.Answer.findAll({
      where: {
        QuestionId: body.questionId
      }
    });
    ctx.body = {
      status: true,
      list: answers
    }
  } catch (error) {
    Logger.error(`answer: ${error.message}`);
    ctx.body = {
      status: false,
      message: '数据库查询失败'
    };
  }
  ctx.status = 200;
}

let answer = {
  addAnswer,
  AllAnswerInQuestion
}

module.exports = answer