import views from 'koa-views';

export default views(
  `${__ROOT__}/app/server/templates`,
  { map: { html: 'ejs' }, extension: 'ejs' },
);
