import scopedClassMaker from '../scopedClassMaker';

describe('scopedClassMaker 函数', () => {
  it('接受 prefix 为 "algae-ui"，suffix 为空', () => {
    const scopedClass = scopedClassMaker('algae-ui');
    const result = scopedClass();
    expect(result).toBe('algae-ui');
  });

  it('接受 prefix 为 "algae-ui"，suffix 为 " "', () => {
    const scopedClass = scopedClassMaker('algae-ui');
    const result = scopedClass();
    expect(result).toBe('algae-ui');
  });

  it('接受 prefix 为 "algae-ui"，suffix 为 "mask"', () => {
    const scopedClass = scopedClassMaker('algae-ui');
    const result = scopedClass('mask');
    expect(result).toBe('algae-ui-mask');
  });

  it('接受 prefix 为 "algae-ui "，suffix 为 " mask"', () => {
    const scopedClass = scopedClassMaker('algae-ui');
    const result = scopedClass('mask');
    expect(result).toBe('algae-ui-mask');
  });

  it('接受 prefix 为 "algae-ui"，suffix 为 ""', () => {
    const scopedClass = scopedClassMaker('algae-ui');
    const result = scopedClass('');
    expect(result).toBe('algae-ui');
  });

  it('接受 prefix 为 "algae-ui"，suffix 为 undefined', () => {
    const scopedClass = scopedClassMaker('algae-ui');
    const result = scopedClass(undefined);
    expect(result).toBe('algae-ui');
  });
});
