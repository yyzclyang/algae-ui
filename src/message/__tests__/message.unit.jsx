import React from 'react';
import message from '../index';

describe('message', () => {
  it('message.info', function(done) {
    message.info('info', 500);
    expect(document.body.querySelectorAll('.algae-ui-message').length).toBe(1);
    setTimeout(() => {
      expect(document.body.querySelectorAll('.algae-ui-message').length).toBe(
        0
      );
      done();
    }, 2000);
  });

  it('带回调的 message', (done) => {
    const fn = jest.fn();
    message.loading('loading', 1000, fn);
    setTimeout(() => {
      expect(fn).toBeCalled();
      done();
    }, 1500);
  });

  it('手动销毁 message', (done) => {
    const destroy = message.loading('loading', 0);
    destroy();
    setTimeout(() => {
      expect(document.body.querySelectorAll('.algae-ui-message').length).toBe(
        0
      );
      done();
    }, 500);
  });
});
