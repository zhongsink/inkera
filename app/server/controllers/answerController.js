const Models = require('../models');
const Logger = require('../utils/Logger');

async function findAnswers(params) {
  let result = [];
  let answers = await Models.Answer.findAll({
    where: {
      QuestionId: params.ques
    },
    order: [
      ['id', 'DESC']
    ]
  });
  for (let answer of answers) {
    user = await Models.User.findOne({
      where: {
        id: answer.UserId
      }
    })
    result.push({
      answer,
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
 * QuestionId: DataTypes.INTEGER,
 * UserId: DataTypes.INTEGER
 */
async function addAnswer(ctx) {
  let body = ctx.request.body;
  try {
    await Models.Answer.create({
      content: body.content,
      QuestionId: body.id,
      UserId: body.userId
    });
    let result = await findAnswers({
      ques: body.id,
    })
    ctx.body = {
      status: true,
      list: result
    }
  } catch (error) {
    Logger.error(`add an answer: ${error.message}`);
    ctx.body = {
      status: false
    }
  }
  ctx.status = 200;
}

/**
 * QuestionId: DataTypes.INTEGER,
 */
async function allAnswer(ctx) {
  let params = ctx.query;
  try {
    let result = await findAnswers(params)
    ctx.body = {
      status: true,
      list: result
    }
  } catch (error) {
    Logger.error(`answer: ${error.message}`);
    ctx.body = {
      status: false
    };
  }
  ctx.status = 200;
}

let answer = {
  addAnswer,
  allAnswer
}

module.exports = answer