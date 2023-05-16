import React from 'react';
import { connect } from 'react-redux';
import { AppState, getTree } from '../store';
import styled from 'styled-components';
import './Tree.scss';

interface TreeProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  tree: string;
}

export class Tree extends React.Component<TreeProps> {
  render() {
    return <StyledTree>{this.props.tree}</StyledTree>;
  }
}

const StyledTree = styled.div`
  padding: 12px;
  white-space: pre;

  font-family: 'Fira code', 'Fira Mono', source-code-pro, Menlo, Monaco,
    Consolas, 'Courier New', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 14px;
`;

const mapStateToProps = (state: AppState) => ({
  tree: getTree(state),
});

export default connect(mapStateToProps)(Tree);
