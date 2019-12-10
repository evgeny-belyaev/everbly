// @flow
import axios from 'axios';

export type UrlsV1Response = {
    api: {
        menu: string
    },
    pages: {
        contact: string,
        main: string
    }
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
