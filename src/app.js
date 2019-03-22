'use strict';

const superagent = require('superagent');

const { SITE, SUBONE, PARAM } = process.env;
console.log(SITE, SUBONE, PARAM);

function testHandleParse(received) {

}

function testHandleGet() {
  return superagent.get(`${SITE}/${SUBONE}?${PARAM}=`)
      .then((data) => {

      })
      .catch((error) => {

      });
}
