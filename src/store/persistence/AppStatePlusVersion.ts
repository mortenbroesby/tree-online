import { AppState, SourceState, OptionsState } from '..';

export interface AppStatePlusVersion extends AppState {
  version?: string;
}

export interface SourceStatePlusVersion extends SourceState {
  version?: string;
}

export interface OptionsStatePlusVersion extends OptionsState {
  version?: string;
}
