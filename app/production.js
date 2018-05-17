/* eslint-disable no-console, import/no-unresolved */
require('colors');
const webpack = require('webpack');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const session = require('koa-generic-session');
const redisStore = require('koa-redis');
const convert = require('koa-convert');
const CSRF = require('koa-csrf');
const configs = require('../config/webpack.prod.config');
const router = require('./server/router');

console.log(`${'[SYS]'.rainbow} webpack building...`);

webpack(configs).run((err, stats) => {
  const app = new Koa();

  // wire webpack stats for server render,  push client state
  app.use(async (ctx, next) => {
    ctx.state.webpackStats = stats;
    await next();
  });

  const {
    logger, statics, publicStatics, views, render,
  } = require('../build/server/server');

  // koa2 middlewares
  app.use(logger);
  // set the session keys
  app.keys = ['inkera'];

  // add session support
  app.use(convert(session({
    store: redisStore()
  })));

  // add body parsing
  app.use(bodyParser());

  // add the CSRF middleware
  app.use(new CSRF({
    invalidSessionSecretMessage: 'Invalid session secret',
    invalidSessionSecretStatusCode: 403,
    invalidTokenMessage: 'Invalid CSRF token',
    invalidTokenStatusCode: 403,
    excludedMethods: [ 'GET', 'HEAD', 'OPTIONS' ],
    disableQuery: false
  }));

  app.use(publicStatics);
  app.use(statics);
  app.use(views);

  app
  .use(router.routes())
  .use(router.allowedMethods());

  app.use(render);

  // start
  app.listen(process.env.PORT, () => {
    console.log(`${'[SYS]'.rainbow} server started at port ${process.env.PORT}`);
  });
});
/* eslint-enable */
