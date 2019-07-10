import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import Highlight, { defaultProps } from 'prism-react-renderer';
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';
import './codeDemo.scss';

const CodeDemo = (props) => {
  const { title, content, children } = props;
  return (
    <div>
      <div>{children}</div>
      <span>{title}</span>
      <span>{content}</span>
      <div>
        <Highlight
          {...defaultProps}
          code={reactElementToJSXString(<div>{children}</div>)}
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
    </div>
  );
};

export default CodeDemo;
