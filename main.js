'use strict';

// must go before any import or program use
require('dotenv').config();
const command = process.argv.splice(2, process.argv.length - 2);
const app = require('./src/app');

const commandToRun = app.stringifyCommand(command);
app.runGetCommand(commandToRun);
