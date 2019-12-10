// @flow

import { createAction } from 'redux-act';
import type { ConfigState } from './selectors';

export const loadConfig = createAction('LOAD_CONFIG');
export const saveConfig = createAction('SAVE_CONFIG', (config: ConfigState) => ({ config }));