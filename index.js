/* eslint-disable no-undef */
const app = require('./app');

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT).on('error', (err) => {
  console.error(err);
});

module.exports = server;
