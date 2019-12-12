const Router = require('koa-router');
const storeController = require('../controllers/store');

const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = {
    data: 'ok',
  };
});

module.exports = router;
