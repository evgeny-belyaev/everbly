// @flow

import React, { Component } from 'react';
import firebase from 'react-native-firebase';
// eslint-disable-next-line import/named
import { createAppContainer } from 'react-navigation';
import { AppNavigator } from './app/routes';

const AppContainer = createAppContainer(AppNavigator);

class App extends Component<{}, {}> {
    componentDidMount = async () => {
        /*

        {
            "to": "/topics/test1",
            
            "notification": {
                "title": "Еще одно охуенное приложение!!!",
                "body": "Реклама!"
            }
        }   

        */

        firebase.messaging().subscribeToTopic('test1');
    }

    render() {
        return (<AppContainer />);
    }
}

export default App;
