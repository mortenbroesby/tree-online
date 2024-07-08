import { useAtom } from 'jotai';
import { useEffect } from 'react';

import {
  sourceAtom,
  optionsAtom,
  DEFAULT_SOURCE,
  CURRENT_SAVED_STATE_SCHEMA_VERSION,
  AppState,
  saveStateToQueryParam,
} from '.';

export const useSourceActions = () => {
  const [source, setSource] = useAtom(sourceAtom);
  const [options] = useAtom(optionsAtom);

  const clearSource = () => {
    setSource('');
  };

  const resetSource = () => {
    setSource(DEFAULT_SOURCE);
  };

  useEffect(() => {
    const state: AppState = {
      source,
      options,
      version: CURRENT_SAVED_STATE_SCHEMA_VERSION,
    };

    saveStateToQueryParam(state);
  }, [source, options]);

  return { clearSource, resetSource };
};
