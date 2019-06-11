import classes from '../classes';

describe('classes 函数', () => {
  it('接受一个 className', () => {
    const result = classes('wechat');
    expect(result).toBe('wechat');
  });

  it('接受两个 className', () => {
    const result = classes('wechat', 'alipay');
    expect(result).toBe('wechat alipay');
  });

  it('接受了一个 undefined，undefined 不会出现在结果中', () => {
    const result = classes('wechat', undefined);
    expect(result).toBe('wechat');
  });

  it('接受各种奇奇乖乖的值', () => {
    const result = classes('wechat', '阿里', null, ' ');
    expect(result).toBe('wechat 阿里  ');
  });

  it('不接受值', () => {
    const result = classes();
    expect(result).toBe('');
  });
});
