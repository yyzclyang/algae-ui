function add(a: number, b: number) {
  return a + b;
}

describe('first test', () => {
  it('add(1, 2) equal 3', () => {
    expect(add(1, 2)).toEqual(3);
  });
});