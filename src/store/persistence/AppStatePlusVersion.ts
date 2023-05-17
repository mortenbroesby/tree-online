import { AppState, SourceState } from '..';

export interface AppStatePlusVersion extends AppState {
  version?: string;
}

export interface SourceStatePlusVersion extends SourceState {
  version?: string;
}
