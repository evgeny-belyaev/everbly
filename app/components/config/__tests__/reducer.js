// @flow

import reducer from '../reducer';
import { saveConfig } from '../actions';

describe('reducer', () => {
    test('should save config', () => {
        const action = saveConfig({
            api: {
                menuUrl: '1'
            },
            pages: {
                contact: '2',
                main: '3'
            }
        });
        const result = reducer({
            api: {
                menuUrl: '1'
            },
            pages: {
                contact: '2',
                main: '3'
            }
        }, action);

        expect(result).toStrictEqual({
            api: {
                menuUrl: '1'
            },
            pages: {
                contact: '2',
                main: '3'
            }
        });
    });

    it('shoult return same state for unknown action', () => {
        const sameState = {
            api: {
                menuUrl: '1'
            },
            pages: {
                contact: '2',
                main: '3'
            }
        };
        const result = reducer(sameState, { type: 'UNKNOWN_ACTION' });

        expect(result).toEqual(sameState);
    });
});