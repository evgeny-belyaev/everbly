// @flow

import axios from 'axios';
import { defaultMenu } from './components/menu/selectors';
import { getMenu } from './components/menu/api';

import type { MenuItem } from './components/menu/selectors';

export type UrlsV1Response = {
    api: {
        menu: string
    },
    pages: {
        contact: string,
        main: string
    }
};

export type AppConfiguration = {
    mainPageUrl: string,
    contactsPageUrl: string,
    menu: MenuItem[]
};

const defaultAppConfiguration: AppConfiguration = {
    mainPageUrl: 'http://everbly.com?view=mobile',
    contactsPageUrl: 'http://everbly.com?view=mobile',
    menu: defaultMenu
};

export const getUrlsV1 = async (): Promise<?UrlsV1Response> => {
    try {
        const r = await axios.get('http://cdn.everbly.com/api/mobile/v1/urls');

        if (r.status !== 200) {
            return null;
        } else {
            return r.data;
        }

    } catch (x) {
        return null;
    }
};


export const loadInitializationData = async (): Promise<AppConfiguration> => {
    const urls = await getUrlsV1();

    if (urls == null) {
        return defaultAppConfiguration;
    } else {
        let menu: MenuItem[] = [];

        const menuResponse = await getMenu(urls.api.menu);

        if (menu != null && menu instanceof Array) {
            let item;

            for (item of menuResponse) {
                if (item.title && item.url) {
                    menu.push({
                        title: item.title,
                        url: item.url
                    });
                }
            }
        }

        return {
            mainPageUrl: urls.pages.main,
            contactsPageUrl: urls.pages.contact,
            menu: menu ? menu : defaultAppConfiguration.menu
        };
    }
};