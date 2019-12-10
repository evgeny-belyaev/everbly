// @flow

import { combineReducers } from 'redux';
import currentUri from './components/currentUri/reducer';
import menu from './components/menu/reducer';
import config from './components/config/reducer';

export default combineReducers({
    currentUri,
    menu,
    config
});
