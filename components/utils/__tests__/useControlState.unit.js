import { renderHook, act } from '@testing-library/react-hooks';
import useControlState from '../useControlState';

describe('useControlState 函数', () => {
  test('测试 useControlState 的返回值', () => {
    const { result } = renderHook(() => useControlState(1));
    expect(result.current[0]).toBe(1);
    expect(typeof result.current[1]).toBe('function');
  });

  test('测试 useControlState 返回的函数能改变返回的值', () => {
    const { result } = renderHook(() => useControlState(1));
    act(() => {
      result.current[1](2);
    });
    expect(result.current[0]).toBe(2);
  });

  test('测试受控时 useControlState 返回的函数不能改变返回的值', () => {
    const { result } = renderHook(() => useControlState(1, 0));
    act(() => {
      result.current[1](2);
    });
    expect(result.current[0]).toBe(0);
  });

  test('测试受控时 useControlState 返回的函数不能改变返回的值，但会执行', () => {
    const spy = jest.fn();
    const { result } = renderHook(() => useControlState(1, 0));
    act(() => {
      result.current[1](() => {
        spy();
      });
    });
    expect(spy).toBeCalled();
  });

  test('测试受控时 useControlState 返回的值随受控值变化而变化', () => {
    const { result, rerender } = renderHook(
      (props) => useControlState(1, props.value),
      { initialProps: { value: 0 } }
    );
    rerender({ value: 10 });
    expect(result.current[0]).toBe(10);
  });
});
