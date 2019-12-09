// @flow

import { Action } from 'redux-act';
import { saveMenu } from './actions';

import type { MenuItem } from './selectors';

type CurrentUriState = {
    items: MenuItem[]
};

export const defaultState = {
    items: []
};

export default (state: CurrentUriState = defaultState, action: Action): CurrentUriState => {
    switch (action.type) {
        case saveMenu.getType(): {
            const { items } = action.payload;

            return { items };
        }
        default:
            return state;
    }
};