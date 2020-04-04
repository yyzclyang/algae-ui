import { renderHook, act } from '@testing-library/react-hooks';
import useToggle from '../useToggle';

describe('useToggle 函数', () => {
  test('测试 useToggle 的返回值', () => {
    const { result } = renderHook(() => useToggle(false));
    expect(result.current[0]).toBe(false);
    expect(typeof result.current[1]).toBe('function');
  });

  test('测试 useToggle 返回的函数能改变返回的值', () => {
    const { result } = renderHook(() => useToggle(false));
    act(() => {
      result.current[1]();
    });
    expect(result.current[0]).toBe(true);
  });
});
