import React from 'react';
import { mount } from 'enzyme';
import MessageDialog from '../messageDialog';

describe('MessageDialog', () => {
  it('渲染一个 MessageDialog', function() {
    const component = mount(
      <MessageDialog visible container={document.body}>
        MessageDialog
      </MessageDialog>
    );
    expect(component.find('.algae-ui-message-content').text()).toEqual(
      'MessageDialog'
    );
    expect(document.body.querySelectorAll('.algae-ui-message').length).toBe(1);
  });

  it('渲染一个 MessageDialog2', function() {
    const component = mount(
      <MessageDialog
        visible
        className="message-test"
        iconType="warning-circle"
        iconStyle={{ fill: '#506dfe' }}
        container={document.body}
      >
        <span className="message-test-2">Message Test 2</span>
      </MessageDialog>
    );
    expect(component.find('.message-test-2').text()).toEqual('Message Test 2');
  });

  it('渲染一个 MessageDialog3', function() {
    mount(
      <MessageDialog
        visible={false}
        className="message-test-3"
        container={document.body}
      >
        <span className="message-test-2">Message Test 2</span>
      </MessageDialog>
    );
    expect(document.body.querySelectorAll('.message-test-3').length).toBe(0);
  });
});
