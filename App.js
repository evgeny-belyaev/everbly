// @flow

import React from 'react';
import { AppNavigator } from './app/routes';
// eslint-disable-next-line import/named
import { createAppContainer } from 'react-navigation';

const AppContainer = createAppContainer(AppNavigator);

const App: () => React$Node = () => {
    return (<AppContainer />);
};

export default App;
