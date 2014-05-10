var transformer = require('dat-transformer');
var tIsoDate = transformer('iso-date');
var tJsDate = transformer('js-date');
// require any other modules you may need here.

module.exports = transformer.Conversion(tIsoDate, tJsDate, convert);

// this is a synchronous conversion.
function convert(isoDate) {
  return new Date(isoDate);
}
