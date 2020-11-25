const { default: toCapitalizeFirstLetter } = require('./toCapitalizeFirstLetter');

describe('function accept string and return string with first letter in upper case and all second letters in lower case', () => {
  test('return right string', () => {
    expect(toCapitalizeFirstLetter('lower')).toEqual('Lower');
    expect(toCapitalizeFirstLetter('HIGHER')).toEqual('Higher');
    expect(toCapitalizeFirstLetter('rAndoMstRinG')).toEqual('Randomstring');
  });
});

// [['lower', 'Lower'], ['HIGHER', 'Higher'], ['rAndoMstRinG', 'Randomstring']];
