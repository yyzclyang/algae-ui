import arcGenerator from '../arcGenerator';

describe('arcGenerator 函数', () => {
  it('返回 strokeDasharray 字符串', () => {
    const result1 = arcGenerator(100, 0.5, 270);
    const result2 = arcGenerator(100, 0.5);
    expect(typeof result1).toBe('string');
    expect(typeof result2).toBe('string');
  });
});
