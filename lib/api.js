/**
 * This module defines a custom jsDoc tag.
 * It allows you to document header parameters of a API.
 * @module lib/headerparam
 */

'use strict';

exports.name ='API';
exports.options = {
  mustHaveValue: true,
  mustNotHaveDescription: true,
  canHaveType: true,
  canHaveName: true,
  onTagged: function(doclet, tag) {
    doclet.API = {
      'name': tag.value.name,
      'type': tag.value.type ? (tag.value.type.names.length === 1 ? tag.value.type.names[0] : tag.value.type.names) : '',
    };
  },
}

function composeColor(type) {
  switch (type) {
    case 'GET':
      return 'blue';
    case 'POST':
      return 'green';
    case 'DELETE':
      return 'red';
    case 'PUT':
      return 'orange';
    default:
      return 'blue';
  }
}
exports.newDocletHandler = function(e) {
  var API = e.doclet.API;
  if (API) {
    e.doclet.scope = 'API';
    e.doclet.description = `
      <div class="api-container">
        <span class="api-method ${composeColor(API.type)}">${API.type}</span>
        <span class="api-path">${API.name}</span>
        <p class="api-description">${e.doclet.description}</p>
      </div>`;
  }
}
