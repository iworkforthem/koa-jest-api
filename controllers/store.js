const Promise = require('bluebird');
const service = Promise.promisifyAll(require('../services/store'));

exports.checkout = () => async (ctx, next) => {
  const { location } = ctx.request.body;
  return await service.locate(location).then((data) => {
    ctx.body = {
      data,
    };
  });
};

exports.cancel = () => async (ctx, next) => await service.get('999').then((data) => {
  ctx.body = {
    data,
  };
});

exports.clear = () => async (ctx, next) => {
  ctx.body = {
    data: 'the cart is empty',
  };
};
