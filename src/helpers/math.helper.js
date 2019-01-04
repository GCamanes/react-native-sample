import _ from 'lodash';

export function sum(number1, number2) {
  if (!_.isNumber(number1) || !_.isNumber(number2)) {
    throw new Error('Arguments must be number');
  }

  return number1 + number2;
}

export function sumAsynchrone(number1, number2) {
  if (!_.isNumber(number1) || !_.isNumber(number2)) {
    throw new Error('Arguments must be number');
  }

  return Promise.resolve(number1 + number2);
}

