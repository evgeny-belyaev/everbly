// @flow
// @flow


import { defaultMenu } from '../menu/selectors';
import { getMenu } from '../menu/api';
import { getUrlsV1 } from './api';
import { takeEvery, put, call } from 'redux-saga/effects';
import { loadConfig, saveConfig } from './actions';
import { saveMenu } from '../menu/actions';

import type { MenuItem } from '../menu/selectors';
import type{ Saga } from 'redux-saga';

const defaultConfig = {
    api: {
        menuUrl: 'http://cdn.everbly.com/api/mobile/v1/menu'
    },
    pages: {
        contact: 'http://everbly.com?view=mobile',
        main: 'http://everbly.com?view=mobile'
    }
};

function* handleLoadConfig(): Saga<void> {
    const urlsResponse = yield call(getUrlsV1);

    if (urlsResponse == null) {
        yield put(saveConfig(defaultConfig));
        yield put(saveMenu(defaultMenu));
    } else {
        yield put(saveConfig({
            api: {
                menuUrl: urlsResponse.api.menu
            },
            pages: {
                contact: urlsResponse.pages.contact,
                main: urlsResponse.pages.main
            }
        }));

        const menuResponse = yield call(getMenu, urlsResponse.api.menu);
        let menu: MenuItem[] = [];

        if (menuResponse != null && menuResponse instanceof Array) {
            let item;

            for (item of menuResponse) {
                if (item.title && item.url) {
                    menu.push({
                        title: item.title,
                        url: item.url
                    });
                }
            }
        } else {
            menu = defaultMenu;
        }

        yield put(saveMenu(menu));
    }

}

export function* watchLoadConfig(): Saga<void> {
    yield takeEvery(loadConfig.getType(), handleLoadConfig);
}

export const __TEST__ = {
    handleLoadConfig
};
