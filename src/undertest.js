import { _ } from 'react/underscore';

const data = require('Data_HACC.json');

function Energy(data) {
  return _.pluck(data, "energy");
}

console.log(Energy(data));
