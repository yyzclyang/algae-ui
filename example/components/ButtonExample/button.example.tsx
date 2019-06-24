import React, { useState } from 'react';
import { Button, ButtonGroup } from 'ROOT/src';

const ButtonExample: React.FunctionComponent = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick: React.MouseEventHandler = () => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div>
      <Button buttonType="primary" icon="alipay">
        Primary
      </Button>
      <Button
        buttonType="primary"
        ghost
        loading={loading}
        full
        onClick={handleClick}
      >
        Primary Ghost Full Loading
      </Button>
      <Button icon="wechat" iconPosition="right">
        Default
      </Button>
      <Button ghost>Default Ghost</Button>
      <Button disabled>Default Disabled</Button>
      <Button ghost disabled>
        Default Ghost Disabled
      </Button>
      <Button buttonType="danger">Danger</Button>
      <Button buttonType="danger" ghost>
        Danger Ghost
      </Button>
      <ButtonGroup>
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button>Button3</Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonExample;
