import { useAtom } from 'jotai';
import React, { useEffect, useRef } from 'react';
import Editor from 'react-simple-code-editor';
import styled from 'styled-components';

import { reverseTree } from '../lib/generate-tree';
import { sourceAtom } from '../store';

interface InputProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const Input: React.FC<InputProps> = () => {
  const [source, setSource] = useAtom(sourceAtom);
  const editorRef = useRef<HTMLDivElement>(null);

  const handlePaste = (event: ClipboardEvent) => {
    event.preventDefault();
    const pasteText = event.clipboardData?.getData('text') || '';
    const cleanedText = reverseTree(pasteText);

    const editorTextarea = editorRef.current?.querySelector('textarea');
    if (editorTextarea) {
      const start = editorTextarea.selectionStart;
      const end = editorTextarea.selectionEnd;
      const currentValue = editorTextarea.value;

      // Append the pasted text to the current value
      const newValue =
        currentValue.slice(0, start) + cleanedText + currentValue.slice(end);
      setSource(newValue);

      // Move cursor to the end of the pasted text
      editorTextarea.setSelectionRange(
        start + cleanedText.length,
        start + cleanedText.length,
      );
    }
  };

  useEffect(() => {
    if (editorRef.current) {
      const editorTextarea = editorRef.current.querySelector('textarea');
      if (editorTextarea) {
        // focus the code editor
        editorTextarea.focus();

        // move the cursor to the end
        editorTextarea.setSelectionRange(
          editorTextarea.value.length,
          editorTextarea.value.length,
        );

        // Add onPaste event listener
        editorTextarea.addEventListener('paste', handlePaste);

        // Cleanup event listener on component unmount
        return () => {
          editorTextarea.removeEventListener('paste', handlePaste);
        };
      }
    }
  }, []);

  /**
   * Applies no syntax highlighting.
   * Required for TypeScript compilation.
   */
  const highlight = (code: string) => {
    return <React.Fragment>{code}</React.Fragment>;
  };

  return (
    <Container ref={editorRef}>
      <Editor
        value={source}
        onValueChange={setSource}
        highlight={highlight}
        padding={12}
      />
    </Container>
  );
};

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

export default Input;
