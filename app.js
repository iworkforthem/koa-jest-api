const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();
app.use(koaBody({}));
app.use(async (ctx, next) => {
  if (!/[a-z]/.test(ctx.request.host)) {
    ctx.body = 'Not Found';
    return;
  }
  console.log(`${ctx.request.method} ${ctx.request.url}`);
  await next();
});

const home = require('./routes/index');

app.use(home.routes());
app.use(home.allowedMethods());

const store = require('./routes/store');

app.use(store.routes());
app.use(store.allowedMethods());

module.exports = app;
