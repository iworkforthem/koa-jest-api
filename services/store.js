const Promise = require('bluebird');
const Endpoint = Promise.promisifyAll(require('../resources/api/endpoint'));
const Db = Promise.promisifyAll(require('../resources/spi/db'));

module.exports = {
  locate: async (location) => await Endpoint.get(location)
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {}),

  ping: async () => {
    const msg = 'this is a ping';
    return msg;
  },

  get: async (id) => await Db.get(id)
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {}),

  set: async () => await Db.set()
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {}),
};
