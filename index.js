var Conversion = require('transformer-conversion');
var tIsoDate = require('transformer.iso-date');
var tJsDate = require('transformer.js-date');
// require any other modules you may need here.

module.exports = Conversion(tIsoDate, tJsDate, convert);

// this is a synchronous conversion.
function convert(isoDate) {
  return new Date(isoDate);
}
