// @flow

import { AppState } from 'react-native';
import React, { Component } from 'react';
import firebase from 'react-native-firebase';
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
    componentWillUnmount = () => {
        AppState.removeEventListener('change', this.onApplicationStateChange);
    }

    onApplicationStateChange = (applicationState: string) => {
        console.log(applicationState);

        if (applicationState === 'active') {
            store.dispatch({ type: 'APP_IS_ACTIVE', payload: {} });
        }
    }

    componentDidMount = async () => {
        AppState.addEventListener('change', this.onApplicationStateChange);
        firebase.messaging().subscribeToTopic('notifications-v1');
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
