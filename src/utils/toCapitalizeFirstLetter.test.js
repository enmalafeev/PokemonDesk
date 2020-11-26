const { default: toCapitalizeFirstLetter } = require('./toCapitalizeFirstLetter');

const cases = [
  ['lower', 'Lower'],
  ['HIGHER', 'Higher'],
  ['rAndoMstRinG', 'Randomstring'],
];

describe('function accept string and return string with first letter in upper case and all second letters in lower case', () => {
  test.each(cases)('return right string: %s -> %s', (checkString, expected) => {
    expect(toCapitalizeFirstLetter(checkString)).toEqual(expected);
  });
});
