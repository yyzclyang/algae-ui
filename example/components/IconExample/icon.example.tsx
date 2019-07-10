import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import oceanicNext from 'prism-react-renderer/themes/oceanicNext';
import { Api } from '../CommonDispalyComponents';
import IconDisplay, { IconData } from './iconDisplay';
import './icon.example.scss';

const code = require('!!raw-loader!./icon.example.tsx');

const IconExample: React.FunctionComponent = () => {
  const iconDisplayData: IconData[] = [
    {
      title: '方向性图标',
      data: [
        'top',
        'down',
        'left',
        'right',
        'arrow-top',
        'arrow-down',
        'arrow-left',
        'arrow-right'
      ]
    },
    {
      title: '提示建议性图标',
      data: [
        'question',
        'question-circle',
        'info',
        'info-circle',
        'close',
        'close-circle',
        'check',
        'check-circle',
        'warning',
        'warning-circle'
      ]
    },
    {
      title: '编辑类图标',
      data: ['edit', 'form', 'copy', 'delete']
    },
    {
      title: '品牌和标识',
      data: [
        'android',
        'apple',
        'windows',
        'facebook',
        'github',
        'gitlab',
        'google',
        'qq',
        'alipay',
        'wechat'
      ]
    },
    {
      title: '网站通用图标',
      data: [
        'alert',
        'api',
        'bell',
        'calendar',
        'camera',
        'cloud',
        'code',
        'gift',
        'like',
        'lock',
        'setting',
        'tag'
      ]
    }
  ];
  return (
    <div>
      <h2>Icon 图标</h2>
      <p>语义化的矢量图形。</p>
      <div>
        <IconDisplay iconDisplayData={iconDisplayData} />
      </div>
      <Api
        data={[
          ['type', '图标类型。', 'string', '-'],
          [
            'style',
            <>
              设置图标的样式，例如<code>fontSize</code>和<code>color</code>。
            </>,
            'CSSProperties',
            '-'
          ],
          ['rotate', '图标旋转角度。', 'number', '-']
        ]}
      />
      <Highlight
        {...defaultProps}
        code={code.default}
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
  );
};

export default IconExample;
