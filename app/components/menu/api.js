// @flow

import axios from 'axios';
import type { MenuItem } from './selectors';

export const getMenu = async (url: string): Promise<MenuItem[]> => {
    try {
        const r = await axios.get(url);

        if (r.status !== 200) {
            return [];
        } else {
            return r.data;
        }
    } catch (x) {
        return [];
    }
};
