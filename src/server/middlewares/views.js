import views from 'koa-views';

export default views(
  `${__ROOT__}/src/server/templates`,
  { map: { html: 'ejs' }, extension: 'ejs' },
);
