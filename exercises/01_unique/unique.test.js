const isUnique = require('./unique');

describe('Уникальность строки', () => {
  test('Строка уникальная, вернет true', () => {
    expect(isUnique('abcdef')).toBe(true);
    expect(isUnique('1234567')).toBe(true);
    expect(isUnique('abcABC')).toBe(true);
  });

  test('Строка не уникальная, вернет false', () => {
    expect(isUnique('abcadef')).toBe(false);
  });
});
