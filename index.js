'use strict';

const authenticationTag = require('./lib/authentication');
const apiTag = require('./lib/api');
const bodyParameterTag = require('./lib/bodyparam');
const headerParameterTag = require('./lib/headerparam');
const queryParameterTag = require('./lib/queryparam');
const apiParameterTag = require('./lib/apiparam');

exports.defineTags = function(dictionary) {
  dictionary.defineTag(authenticationTag.name, authenticationTag.options);
  dictionary.defineTag(apiTag.name, apiTag.options);
  dictionary.defineTag(bodyParameterTag.name, bodyParameterTag.options);
  dictionary.defineTag(headerParameterTag.name, headerParameterTag.options);
  dictionary.defineTag(queryParameterTag.name, queryParameterTag.options);
  dictionary.defineTag(apiParameterTag.name, apiParameterTag.options);
};

exports.handlers = {
  newDoclet: function(e) {
    authenticationTag.newDocletHandler(e);
    bodyParameterTag.newDocletHandler(e);
    headerParameterTag.newDocletHandler(e);
    queryParameterTag.newDocletHandler(e);
    apiParameterTag.newDocletHandler(e);
    apiTag.newDocletHandler(e);
  }
}
