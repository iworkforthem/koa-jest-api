const Router = require('koa-router');
const storeController = require('../controllers/store');

const router = new Router({ prefix: '/store' });

router.get('/', async (ctx, next) => {
  ctx.body = {
    data: 'ok',
  };
});

router.get('/:id', async (ctx, next) => {
  const { id } = ctx.params;
  ctx.body = {
    data: id,
  };
});

router.post('/cart', async (ctx, next) => {
  const { id } = ctx.request.body;
  ctx.body = {
    data: id,
  };
});

router.post('/cart/checkout', storeController.checkout());
router.post('/cart/cancel', storeController.cancel());
router.post('/cart/clear', storeController.clear());

module.exports = router;
