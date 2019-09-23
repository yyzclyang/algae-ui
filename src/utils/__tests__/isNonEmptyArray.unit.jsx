import isNonEmptyArray from '../isNonEmptyArray';

describe('isNonEmptyArray', () => {
  it('判断 number', () => {
    expect(isNonEmptyArray(1)).toBe(false);
  });
  it('判断 string', () => {
    expect(isNonEmptyArray('1')).toBe(false);
  });
  it('判断 boolean', () => {
    expect(isNonEmptyArray(true)).toBe(false);
  });
  it('判断 undefined', () => {
    expect(isNonEmptyArray(undefined)).toBe(false);
  });
  it('判断 null', () => {
    expect(isNonEmptyArray(null)).toBe(false);
  });
  it('判断 symbol', () => {
    expect(isNonEmptyArray(Symbol())).toBe(false);
  });
  it('判断 Object', () => {
    expect(isNonEmptyArray({ key: 'value' })).toBe(false);
  });
  it('判断空 Array', () => {
    expect(isNonEmptyArray([])).toBe(false);
  });
  it('判断 Array', () => {
    expect(isNonEmptyArray([1, 2, 3])).toBe(true);
  });
});
