'use strict';

exports.__esModule = true;
exports.default = validate;

var _dayjs = require('dayjs');

var _dayjs2 = _interopRequireDefault(_dayjs);

var _customParseFormat = require('dayjs/plugin/customParseFormat');

var _customParseFormat2 = _interopRequireDefault(_customParseFormat);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dayjs2.default.extend(_customParseFormat2.default);

var defaultFormat = 'MM/DD/YYYY';

function validate(value, context) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$format = _ref.format,
      format = _ref$format === undefined ? defaultFormat : _ref$format,
      _ref$errorMessage = _ref.errorMessage,
      errorMessage = _ref$errorMessage === undefined ? 'Format needs to be ' + format : _ref$errorMessage;

  if ((0, _utils.isEmpty)(value)) return true;

  var date = (0, _dayjs2.default)(value, format);

  if (format === defaultFormat && !date.isValid()) {
    date = (0, _dayjs2.default)(value, _utils.isoDateFormat);
  }

  return date.isValid() || errorMessage;
}