// @flow

import { combineReducers } from 'redux';
import currentUri from './components/currentUri/reducer';
import menu from './components/menu/reducer';

export default combineReducers({
    currentUri,
    menu
});
