// @flow

import { AppState } from 'react-native';
import React, { Component } from 'react';
import firebase from 'react-native-firebase';
// eslint-disable-next-line import/named
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from './app/reducer';
import { AppNavigator } from './app/routes';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './app/saga';
import { loadConfig } from './app/components/config/actions';
import AppMetrica from 'react-native-appmetrica';

const AppContainer = createAppContainer(AppNavigator);
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    {},
    reduxDevTools ? compose(applyMiddleware(sagaMiddleware), reduxDevTools) : compose(applyMiddleware(sagaMiddleware)));

class App extends Component<{}, {}> {
    constructor(props: {}) {
        super(props);

        sagaMiddleware.run(rootSaga);

        AppMetrica.activateWithApiKey('f855a6b1-f732-4811-8ea7-248b1eabf3d1');
        AppMetrica.reportEvent('App started');
    }

    componentDidMount = async () => {
        store.dispatch(loadConfig());

        AppState.addEventListener('change', this.onApplicationStateChange);
        firebase.messaging().subscribeToTopic('notifications-v2');
    }

    componentWillUnmount = () => {
        AppState.removeEventListener('change', this.onApplicationStateChange);
    }

    onApplicationStateChange = (applicationState: string) => {
        console.log(applicationState);

        if (applicationState === 'active') {
            store.dispatch(loadConfig());
        }
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
