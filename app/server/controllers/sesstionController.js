const Models = require('../models');
const Logger = require('../utils/Logger');

async function logout (ctx) {
    try {
      ctx.cookies.set('inkera-user-id', '');
      ctx.body = {
          status: true
      }
    } catch (error) {
        Logger.error(`logout: ${error.message}`);
        ctx.body = {
            status: false
        }
    }
    ctx.status = 200;
}

module.exports = {
    logout
}

