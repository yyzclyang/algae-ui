import React, { useState } from 'react';
import { Button, ButtonGroup } from 'ROOT/src';
import './style.scss';
// import Highlight, { defaultProps } from 'prism-react-renderer';
// import oceanicNext from 'prism-react-renderer/themes/oceanicNext';
//
// const code = require('!!raw-loader!./button.example.tsx');

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
      <Button buttonType="success">Success</Button>
      <Button buttonType="success" ghost>
        Success Ghost
      </Button>
      <ButtonGroup>
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button>Button3</Button>
      </ButtonGroup>
      {/*<Highlight*/}
      {/*  {...defaultProps}*/}
      {/*  code={code.default}*/}
      {/*  language="jsx"*/}
      {/*  theme={oceanicNext}*/}
      {/*>*/}
      {/*  {({ className, style, tokens, getLineProps, getTokenProps }) => (*/}
      {/*    <pre className={className} style={style}>*/}
      {/*      {tokens.map((line, i) => (*/}
      {/*        <div key={i} {...getLineProps({ line, key: i })}>*/}
      {/*          {line.map((token, key) => (*/}
      {/*            <span key={key} {...getTokenProps({ token, key })} />*/}
      {/*          ))}*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </pre>*/}
      {/*  )}*/}
      {/*</Highlight>*/}
    </div>
  );
};

export default ButtonExample;
