const path = require('path');

module.exports = {
  // client webpack config name
  client: 'client',
  // server webpack config name
  server: 'server',
  alias: {
    assets: path.resolve(__dirname, '../app/assets'),
    client: path.resolve(__dirname, '../app/client'),
    server: path.resolve(__dirname, '../app/server'),
    shared: path.resolve(__dirname, '../app/shared'),
    themes: path.resolve(__dirname, '../app/themes'),
  },
};
