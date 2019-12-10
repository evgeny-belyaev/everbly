// @flow

export type ConfigState = {
    api: {
        menuUrl: string
    },
    pages: {
        contact: string,
        main: string
    }
};

export interface IConfigState {
    config: ConfigState
}

export const getConfig = (state: IConfigState): ConfigState => state.config;