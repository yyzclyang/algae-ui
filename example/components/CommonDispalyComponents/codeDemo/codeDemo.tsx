import React from 'react';
import { renderToString } from 'react-dom/server';
import Highlight, { defaultProps } from 'prism-react-renderer';
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';
import './codeDemo.scss';

interface CodeDemoProps {
  title: string;
  content: string;
  children: React.ReactNode;
}

const CodeDemo: React.FunctionComponent<CodeDemoProps> = (
  props: CodeDemoProps
) => {
  const { title, content, children } = props;
  console.log(children);
  return (
    <div>
      <div>{children}</div>
      <span>{title}</span>
      <span>{content}</span>
      <div>
        <Highlight
          {...defaultProps}
          code={renderToString(children as React.ReactElement)}
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
