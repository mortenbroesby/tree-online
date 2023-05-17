import React, { createRef, RefObject } from 'react';
import { connect } from 'react-redux';
import Editor from 'react-simple-code-editor';
import { bindActionCreators, Dispatch } from 'redux';
import { updateSource } from '../store/source/actions';
import { SourceState } from '../store/source/types';
import styled from 'styled-components';

interface InputProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  source: string;
  updateSource: typeof updateSource;
}

export class Input extends React.Component<InputProps> {
  editorRef: RefObject<HTMLDivElement>;

  constructor(props: Readonly<InputProps>) {
    super(props);
    this.editorRef = createRef();
  }

  componentDidMount() {
    // Ideally, it would be possible to just call
    // a .focus() method on the Editor instance instead:
    // https://github.com/satya164/react-simple-code-editor/issues/25
    if (this.editorRef.current) {
      const editorTextarea = this.editorRef.current.querySelector('textarea');
      if (editorTextarea) {
        // focus the code editor
        editorTextarea.focus();

        // move the cursor to the end
        editorTextarea.setSelectionRange(
          editorTextarea.value.length,
          editorTextarea.value.length,
        );
      }
    }
  }

  /**
   * Applies no syntax highlighting.
   * Required for TypeScript compilation.
   */
  highlight = (code: string) => <React.Fragment>{code}</React.Fragment>;

  render() {
    return (
      <Container ref={this.editorRef}>
        <StyledEditor
          value={this.props.source}
          onValueChange={this.props.updateSource}
          highlight={this.highlight}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  background: #eaeaea;
  padding: 12px;
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  max-height: 100%;
  max-width: 100%;
  flex: 1 1;
  border-radius: 8px;

  font-family: 'Fira code', 'Fira Mono', source-code-pro, Menlo, Monaco,
    Consolas, 'Courier New', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 14px;

  &:focus-within {
    box-shadow: 0 0 0.3rem rgba(115, 255, 175, 0.34);
  }

  textarea {
    outline: none;
  }

  > * {
    height: 100% !important;
    width: 100% !important;
    min-height: 100% !important;
    min-width: 100% !important;
  }
`;

const StyledEditor = styled(Editor)``;

const mapStateToProps = ({ source }: { source: SourceState }) => ({
  source: source.source,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ updateSource }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Input);
