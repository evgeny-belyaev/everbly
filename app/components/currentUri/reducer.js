// @flow

import { Action } from 'redux-act';
import { setCurrentUri } from './actions';

type CurrentUriState = {
    uri: string
};

export const defaultState = {
    uri: ''
};

export default (state: CurrentUriState = defaultState, action: Action): CurrentUriState => {
    switch (action.type) {
        case setCurrentUri.getType(): {
            const { uri } = action.payload;

            return {
                uri
            };
        }
        default:
            return state;
    }
};