// @flow

import React, { Component } from 'react';
import firebase from 'react-native-firebase';
// eslint-disable-next-line import/named
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import rootReducer from './app/reducer';
import { AppNavigator } from './app/routes';


const AppContainer = createAppContainer(AppNavigator);


const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(
    rootReducer,
    {},
    reduxDevTools ? compose(reduxDevTools) : compose());

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
        return (
            <Provider store={store}>
                <AppContainer />
            </Provider>
        );
    }
}

export default App;
