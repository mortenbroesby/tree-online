import { useAtom } from 'jotai';
import { useEffect } from 'react';

import {
  AppState,
  CURRENT_SAVED_STATE_SCHEMA_VERSION,
  optionsAtom,
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

    saveStateToQueryParam(state);
  }, [options]);

  return {
    options,
    updateFormat,
    updateTrailingSlash,
    updateRootDot,
  };
};
