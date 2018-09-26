'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/js-react-forms.cjs.production.js')
} else {
  module.exports = require('./dist/js-react-forms.cjs.development.js')
}
