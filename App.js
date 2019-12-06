// @flow

import React, { Component } from 'react';
import firebase from 'react-native-firebase';
// eslint-disable-next-line import/named
import { createAppContainer } from 'react-navigation';
import { AppNavigator } from './app/routes';

const AppContainer = createAppContainer(AppNavigator);

class App extends Component<{}, {}> {
    componentDidMount = () => {
        firebase.messaging().subscribeToTopic('announcement');
    }

    render() {
        return (<AppContainer />);
    }
}

export default App;
