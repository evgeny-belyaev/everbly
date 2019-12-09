// @flow
import { createAction } from 'redux-act';
import type { MenuItem } from './selectors';

export const saveMenu = createAction('SAVE_MENU', (items: MenuItem[]) => ({ items }));