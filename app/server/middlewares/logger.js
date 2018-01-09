let utilLogger = require('../utils/Logger');
const logger = async (ctx, next) => {
  const now = new Date();
  await next();
  const ms = new Date() - now;
  utilLogger.info(`[${ctx.method}][${ms}ms] ${ctx.path}`);
};

export default logger;
