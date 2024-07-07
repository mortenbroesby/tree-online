import { useAtom } from 'jotai';
import { useEffect } from 'react';

import {
  AppState,
  CURRENT_SAVED_STATE_SCHEMA_VERSION,
  optionsAtom,
  saveStateToLocalStorage,
  saveStateToQueryParam,
  sourceAtom,
} from '.';

export const useUpdateOptions = () => {
  const [source] = useAtom(sourceAtom);
  const [options, setOptions] = useAtom(optionsAtom);

  const updateFormat = (newValue: string) => {
    setOptions((prev) => ({
      ...prev,
      charset: newValue as AppState['options']['charset'],
    }));
  };

  const updateUseIcon = (newValue: boolean) => {
    setOptions((prev) => ({ ...prev, useIcon: newValue }));
  };

  const updateTrailingSlash = (newValue: boolean) => {
    setOptions((prev) => ({ ...prev, trailingSlash: newValue }));
  };

  const updateRootDot = (newValue: boolean) => {
    setOptions((prev) => ({ ...prev, rootDot: newValue }));
  };

  useEffect(() => {
    const state: AppState = {
      source,
      options,
      version: CURRENT_SAVED_STATE_SCHEMA_VERSION,
    };

    saveStateToLocalStorage(state);
    saveStateToQueryParam(state);
  }, [source, options]);

  return {
    options,
    updateFormat,
    updateUseIcon,
    updateTrailingSlash,
    updateRootDot,
  };
};
