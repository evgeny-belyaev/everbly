// @flow

import { Client, Configuration } from 'bugsnag-react-native';

export function createBugsnagClientInstance(): Client {
    const bugSnagConfig = new Configuration('7837b8ef4345c307453ba82e8d11de26');
    bugSnagConfig.appVersion = '1.0.0';

    return new Client(bugSnagConfig);
}

