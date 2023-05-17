import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { AppState, getTree } from '../store';
import { Button } from '@mantine/core';
import CopyToClipboard from 'react-copy-to-clipboard';

const COPY = 'Copy output';
const SHARE = 'Share URL';

const BUTTON_TEXT_TIMEOUT = 1200;

const ShareButtonsGroup: React.FC<{
  tree: string;
}> = props => {
  const [copyButtonText, setCopyButtonText] = useState(COPY);
  const [shareButtonText, setShareButtonText] = useState(SHARE);

  const onCopy = useCallback(() => {
    setCopyButtonText('Output was copied!');
    setTimeout(() => setCopyButtonText(COPY), BUTTON_TEXT_TIMEOUT);
  }, []);

  const onShare = useCallback(() => {
    setShareButtonText('URL was copied!');
    setTimeout(() => setShareButtonText(SHARE), BUTTON_TEXT_TIMEOUT);
  }, []);

  return (
    <>
      <CopyToClipboard text={props.tree} onCopy={onCopy}>
        <Button variant="gradient" gradient={{ from: 'red', to: 'orange' }}>
          {copyButtonText}
        </Button>
      </CopyToClipboard>

      <CopyToClipboard text={window.location.href} onCopy={onShare}>
        <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
          {shareButtonText}
        </Button>
      </CopyToClipboard>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  tree: getTree(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ShareButtonsGroup);
