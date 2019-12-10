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
    }

    componentDidMount = async () => {
        store.dispatch(loadConfig());

        AppState.addEventListener('change', this.onApplicationStateChange);
        firebase.messaging().subscribeToTopic('notifications-v1');
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
