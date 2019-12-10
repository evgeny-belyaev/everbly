// @flow

import { getConfig } from '../selectors';

describe('Selectors', () => {
    it('works', () => {
        expect(getConfig({
            config: {
                api: {
                    menuUrl: '1'
                },
                pages: {
                    contact: '2',
                    main: '3'
                }
            }
        })).toStrictEqual({
            api: {
                menuUrl: '1'
            },
            pages: {
                contact: '2',
                main: '3'
            }
        });
    });
});

