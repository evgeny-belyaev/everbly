
// @flow

import { expectSaga, RunResult } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { getMenu } from '../../menu/api';
import { loadConfig, saveConfig } from '../actions';
import { getUrlsV1 } from '../api';
import { __TEST__ } from '../sagas';

const { handleLoadConfig } = __TEST__;

describe('Load config', () => {
    it('Loads config', (): RunResult => {
        return expectSaga(handleLoadConfig, loadConfig())
            .provide([
                [matchers.call.fn(getUrlsV1), {
                    api: {
                        menu: 'menuUrl'
                    },
                    pages: {
                        contact: 'contactsUrl',
                        main: 'mainUrl'
                    }
                }],
                [matchers.call.fn(getMenu), [
                    { title: '1', url: 'u1' },
                    { title: '2', url: 'u2' }
                ]],
            ])
            .call(getUrlsV1)
            .put(saveConfig({
                api: {
                    menu: 'menuUrl'
                },
                pages: {
                    contact: 'contactsUrl',
                    main: 'mainUrl'
                }
            }))
            // .call(getMenu, 'menuUrl')
            // .put(saveMenu([
            //     { title: '1', url: 'u1' },
            //     { title: '2', url: 'u2' }
            // ]))
            .silentRun();
    });


});


