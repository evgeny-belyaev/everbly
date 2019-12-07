// @flow
import { createAction } from 'redux-act';

export const setCurrentUri = createAction('SET_CURRENT_URI', (uri: string) => ({ uri }));