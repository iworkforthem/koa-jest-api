const axios = require('axios');

class Endpoint {
  constructor() {}

  async get() {
    return await axios
      .get('https://api.data.gov.sg/v1/environment/air-temperature')
      .then((response) => response.data.items.shift().timestamp)
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }
}

module.exports = new Endpoint();
