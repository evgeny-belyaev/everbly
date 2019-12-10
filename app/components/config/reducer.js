// @flow

import { Action } from 'redux-act';
import { saveConfig } from './actions';
import type { ConfigState } from './selectors';

export const defaultState = {
    api: {
        menuUrl: ''
    },
    pages: {
        contact: '',
        main: ''
    }
};

export default (state: ConfigState = defaultState, action: Action): ConfigState => {
    switch (action.type) {
        case saveConfig.getType(): {
            return action.payload.config;
        }
        default:
            return state;
    }
};