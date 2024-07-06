import React from 'react';
import { useAtom } from 'jotai';
import styled from 'styled-components';

import { getTreeAtom } from '../store';
import './Tree.scss';

interface TreeProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Tree: React.FC<TreeProps> = () => {
  const [tree] = useAtom(getTreeAtom);

  return <StyledTree>{tree}</StyledTree>;
};

const StyledTree = styled.div`
  padding: 12px;
  white-space: pre;

  font-family: 'Fira code', 'Fira Mono', source-code-pro, Menlo, Monaco,
    Consolas, 'Courier New', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 14px;
`;

export default Tree;
