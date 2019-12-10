// @flow

import { saveConfig } from '../actions';

describe('actions', () => {
    it('saveConfig', () => {
        expect(saveConfig({
            api: {
                menuUrl: '1'
            },
            pages: {
                contact: '2',
                main: '3'
            }
        }))
            .toMatchObject({
                payload: {
                    config: {
                        api: {
                            menuUrl: '1'
                        },
                        pages: {
                            contact: '2',
                            main: '3'
                        }
                    }
                }
            });
    });
});
