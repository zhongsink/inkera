const fs = require('fs-extra');

fs.removeSync('./build');

fs.copySync('./app/assets', './build/assets');

console.log('done');
