import { useAtom } from 'jotai';
import { useEffect } from 'react';

import {
  AppState,
  CURRENT_SAVED_STATE_SCHEMA_VERSION,
  optionsAtom,
  saveOptionsToLocalStorage,
  saveStateToQueryParam,
} from '.';

export const useUpdateOptions = () => {
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
      options,
      version: CURRENT_SAVED_STATE_SCHEMA_VERSION,
    };

    saveStateToQueryParam(state);
    saveOptionsToLocalStorage(state);
  }, [options]);

  return {
    options,
    updateFormat,
    updateUseIcon,
    updateTrailingSlash,
    updateRootDot,
  };
};
