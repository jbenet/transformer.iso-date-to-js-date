# transformer.iso-date-to-js-date

[Transformer](http://github.com/jbenet/transformer) conversion: iso-date to js-date

This module is a transformer conversion, published on npm. Read more about transformer at:

- the transformer website: <http://transform.datadex.io>
- the transformer repository: <http://github.com/jbenet/transformer>

## Usage

Use this module through transformer.


### Commandline

```
> echo '2014-05-07T01:10:45.000Z' | transform iso-date js-date
Tue May 06 2014 18:10:45 GMT-0700 (PDT)
```

### Javascript

```js
var transformer = require('dat-transformer');
var tIsoDateToJsDate = transformer('iso-date', 'js-date');
tIsoDateToJsDate('2014-05-07T01:10:45.000Z'); // new Date("2014-05-07T01:10:45.000Z")
```
