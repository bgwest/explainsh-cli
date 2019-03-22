'use strict';

const superagent = require('superagent');

const { SITE, SUBONE, PARAM } = process.env;
console.log(SITE, SUBONE, PARAM);

function stringifyCommand(command) {

}

function runGetCommand(receivedCmd) {
  return superagent.get(`${SITE}/${SUBONE}?${PARAM}=${receivedCmd}`)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        return error;
      });
}

module.exports = { runGetCommand, stringifyCommand };
