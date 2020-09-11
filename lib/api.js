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
exports.newDocletHandler = function(e) {
  var API = e.doclet.API;
  if (API) {
    e.doclet.scope = 'API';
    e.doclet.description = `
                            <table class="params table table-striped">
                            <thead><tr><th>Method</th><th class="last">Path</th></tr></thead>
                            <tr>
                            <td class="type">${API.type}</td>
                            <td class="name last">${API.name}</td>
                            </tr>
                            </table>
                            ${e.doclet.description}`;
  }
}
