import React from 'react';
import message from '../index';

describe('message', () => {
  it('message.info', function() {
    jest.useFakeTimers();
    message.info('info', 500);
    expect(document.body.querySelectorAll('.algae-ui-message').length).toBe(1);
    setTimeout(() => {
      expect(document.body.querySelectorAll('.algae-ui-message').length).toBe(
        0
      );
    }, 2000);
    jest.runAllTimers();
  });

  it('带回调的 message', () => {
    jest.useFakeTimers();
    const fn = jest.fn();
    message.loading('loading', 1000, fn);
    setTimeout(() => {
      expect(fn).toBeCalled();
    }, 1500);
    jest.runAllTimers();
  });

  it('手动销毁 message', () => {
    jest.useFakeTimers();
    const destroy = message.loading('loading', 0);
    destroy();
    setTimeout(() => {
      expect(document.body.querySelectorAll('.algae-ui-message').length).toBe(
        0
      );
    }, 500);
    jest.runAllTimers();
  });
});
