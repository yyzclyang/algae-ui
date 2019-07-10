import React from 'react';

export interface CodeDemoProps {
  title: string;
  content: string;
  children: React.ReactNode;
}

declare class CodeDemo extends React.Component<CodeDemoProps> {}
export default CodeDemo;
