import getScrollBarWidth from '../getScrollBarWidth';

describe('getScrollBarWidth 函数', () => {
  it('返回 ScrollBar 的宽度', () => {
    const result = getScrollBarWidth();
    expect(typeof result).toBe('number');
  });
});
