import React, { useState, useEffect } from 'react';
import copy from 'copy-to-clipboard';
import Highlight, { defaultProps } from 'prism-react-renderer';
import oceanicNext from './customTheme';
import { Icon } from 'algae-ui';
import './codeDemo.scss';

interface CodeDemoProps {
  title: string;
  content: React.ReactNode;
  code: string;
  children: React.ReactNode;
}

const CodeDemo: React.FunctionComponent<CodeDemoProps> = (
  props: CodeDemoProps
) => {
  const { title, content, code, children } = props;
  const [codeVisible, setCodeVisible] = useState<boolean>(false);
  const [copyFlagVisible, setCopyFlagVisible] = useState<boolean>(false);
  const [resetCopyFlagVisible, setResetCopyFlagVisible] = useState<
    ReturnType<typeof setTimeout>
  >();
  useEffect(() => {
    return () => {
      resetCopyFlagVisible && clearTimeout(resetCopyFlagVisible);
    };
  }, [resetCopyFlagVisible]);

  return (
    <div className="code-demo">
      <div className="component-list">{children}</div>
      <div className="title">
        <span>{title}</span>
      </div>
      <div className="content">
        <span>{content}</span>
      </div>
      <div className="code-control">
        {!copyFlagVisible && (
          <div
            className="copy"
            onClick={() => {
              copy(code);
              setCopyFlagVisible(true);
              setResetCopyFlagVisible(
                setTimeout(() => {
                  setCopyFlagVisible(false);
                }, 2000)
              );
            }}
          >
            <Icon type="copy" />
          </div>
        )}
        {copyFlagVisible && (
          <div className="check">
            <Icon type="check" style={{ fill: '#20baa4' }} />
          </div>
        )}
        {!codeVisible && (
          <div
            className="code-show"
            onClick={() => {
              setCodeVisible(true);
            }}
          >
            <Icon type="code-show" />
          </div>
        )}
        {codeVisible && (
          <div
            className="code-hidden"
            onClick={() => {
              setCodeVisible(false);
            }}
          >
            <Icon type="code-hidden" />
          </div>
        )}
      </div>
      <>
        {codeVisible && (
          <div className="code">
            <Highlight
              {...defaultProps}
              code={code}
              language="jsx"
              theme={oceanicNext}
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        )}
      </>
    </div>
  );
};

export default CodeDemo;
