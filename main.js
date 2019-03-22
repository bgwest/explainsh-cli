'use strict';

// must go before any import or program use
require('dotenv').config();
const command = process.argv.splice(2, process.argv.length - 2);
console.log(command);
const app = require('./src/app');
