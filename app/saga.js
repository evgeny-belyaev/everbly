// @flow

import { Logger } from './components/logger';
import { all } from 'redux-saga/effects';
import { watchLoadConfig } from './components/config/sagas';
import type { Saga } from 'redux-saga';

const log = new Logger('rootSaga');

export function* rootSaga(): Saga<void> {
    log.debug('rootSaga started');

    try {
        yield all([
            watchLoadConfig()
        ]);
    } catch (x) {
        log.warn('Saga unhandled exception', x);
    }
}