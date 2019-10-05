import rotateMatrixGenerator from '../rotateMatrixGenerator';

describe('rotateMatrixGenerator 函数', () => {
  it('返回旋转矩阵字符串', () => {
    const result = rotateMatrixGenerator(
      -90,
      { x: 100, y: 100 },
      { x: 100, y: 100 }
    );
    expect(typeof result).toBe('string');
  });
});
