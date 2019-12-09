// @flow

import { getMenuItems, defaultMenu } from '../selectors';

describe('Selectors', () => {
    it('works', () => {
        expect(getMenuItems({
            menu: {}
        })).toStrictEqual(defaultMenu);

        expect(getMenuItems({
            menu: {
                items: []
            }
        })).toStrictEqual(defaultMenu);
    });
});

