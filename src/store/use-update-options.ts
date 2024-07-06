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

  const updateFancy = (newValue: boolean) => {
    setOptions((prev) => ({ ...prev, fancy: newValue }));
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
    const state = {
      source,
      options,
      version: CURRENT_SAVED_STATE_SCHEMA_VERSION,
    } satisfies AppState;

    saveStateToLocalStorage(state);
    saveStateToQueryParam(state);
  }, [source, options]);

  return {
    options,
    updateFancy,
    updateUseIcon,
    updateTrailingSlash,
    updateRootDot,
  };
};
