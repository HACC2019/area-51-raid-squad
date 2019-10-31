'use strict';

exports.__esModule = true;
exports.default = validate;

var _dayjs = require('dayjs');

var _dayjs2 = _interopRequireDefault(_dayjs);

var _isBetween = require('dayjs/plugin/isBetween');

var _isBetween2 = _interopRequireDefault(_isBetween);

var _customParseFormat = require('dayjs/plugin/customParseFormat');

var _customParseFormat2 = _interopRequireDefault(_customParseFormat);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dayjs2.default.extend(_isBetween2.default);
_dayjs2.default.extend(_customParseFormat2.default);

function setMin(value) {
  value.set('hours', 0);
  value.set('minutes', 0);
  value.set('seconds', 0);

  return value;
}

function setMax(value) {
  value.set('hours', 23);
  value.set('minutes', 59);
  value.set('seconds', 59);

  return value;
}

function getStartDate(start) {
  return setMin((0, _dayjs2.default)().add(start.value, start.units));
}

function getEndDate(end) {
  return setMax((0, _dayjs2.default)().add(end.value, end.units));
}

function validate(value, context) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$format = _ref.format,
      format = _ref$format === undefined ? 'MM/DD/YYYY' : _ref$format,
      _ref$displayFormat = _ref.displayFormat,
      displayFormat = _ref$displayFormat === undefined ? 'MM/DD/YYYY' : _ref$displayFormat,
      _ref$start = _ref.start,
      start = _ref$start === undefined ? {} : _ref$start,
      _ref$end = _ref.end,
      end = _ref$end === undefined ? {} : _ref$end,
      errorMessage = _ref.errorMessage;

  if ((0, _utils.isEmpty)(value)) return true;

  var startDate = void 0;
  var endDate = void 0;

  var date = (0, _dayjs2.default)(value, format);

  if (!date.isValid()) {
    date = (0, _dayjs2.default)(value, _utils.isoDateFormat);
  }
  date = setMin(date);

  if (!(0, _utils.isEmpty)(start.units) && !(0, _utils.isEmpty)(end.units)) {
    startDate = getStartDate(start);
    endDate = getEndDate(end);
  } else {
    startDate = (0, _dayjs2.default)(start.value, start.format || format);
    endDate = setMax((0, _dayjs2.default)(end.value, end.format || format));
  }
  errorMessage = errorMessage || 'Date must be between ' + startDate.format(displayFormat) + ' and ' + endDate.format(displayFormat);
  return date.isValid() && (date.isBetween(startDate, endDate, 'day') || date.isSame(startDate, 'day') || date.isSame(endDate, 'day')) || errorMessage;
}