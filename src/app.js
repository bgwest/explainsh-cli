'use strict';

const superagent = require('superagent');
const striptags = require('striptags');

const { SITE, SUBONE, PARAM } = process.env;

function stringifyCommand(command) {
  let commandString = '';
  command.forEach((token) => {
    commandString += token;
    commandString += ' ';
  });
  return commandString;
}

function runGetCommand(receivedCmd) {
  return superagent.get(`${SITE}/${SUBONE}?${PARAM}=${receivedCmd}`)
      .then((data) => {
        const html = data.text;
        let parsedHtml = striptags(html);
        // remove new lines
        parsedHtml = parsedHtml.replace(/\n/g, '');
        // remove tabs/spaces
        parsedHtml = parsedHtml.replace(/^\s+/g, '');
        console.log(parsedHtml);
      })
      .catch((error) => {
        return error;
      });
}

module.exports = { runGetCommand, stringifyCommand };
