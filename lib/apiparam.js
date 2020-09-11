'use strict';

const tableBuilder = require('./parameterTableBuilder');

exports.name = 'APIparam';
exports.options = {
  mustHaveValue: true,
  mustNotHaveDescription: false,
  canHaveType: true,
  canHaveName: true,
  onTagged: function(doclet, tag) {
    if (!doclet.APIparams) {
      doclet.APIparams = [];
    }

    doclet.APIparams.push({
      'name': tag.value.name,
      'type': tag.value.type ? (tag.value.type.names.length === 1 ? tag.value.type.names[0] : tag.value.type.names) : '',
      'description': tag.value.description || '',
    });
  },
}
exports.newDocletHandler = function(e) {
  const parameters = e.doclet.APIparams;
  if (parameters) {
    const table = tableBuilder.build('API Parameters', parameters);

    e.doclet.description = `${e.doclet.description}
                            ${table}`;
  }
}
