const removeDupes = require('./remove-dupes');
describe('Remove dupes', () => {
  test('It should remove dupes from string', () => {
    expect(removeDupes('abcd')).toBe('abcd');
    expect(removeDupes('aabbccdd')).toBe('abcd');
    expect(removeDupes('abcddbca')).toBe('abcd');
    expect(removeDupes('abababcdcdcd')).toBe('abcd');
  })
})