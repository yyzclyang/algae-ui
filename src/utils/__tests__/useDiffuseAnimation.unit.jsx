import { renderHook, act } from '@testing-library/react-hooks';
import useDiffuseAnimation from '../useDiffuseAnimation';

describe('useDiffuseAnimation 函数', () => {
  test('测试 useDiffuseAnimation 的返回值', () => {
    const { result } = renderHook(() => useDiffuseAnimation());
    expect(result.current[0]).toBe('');
    expect(typeof result.current[1]).toBe('function');
  });

  test('测试 useDiffuseAnimation 返回的函数能改变返回的值', () => {
    const { result } = renderHook(() => useDiffuseAnimation(1));
    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe('algae-ui-animation-diffuse');
  });
});
