// @flow

import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import { WebView } from 'react-native-webview';
import { DrawerActions } from 'react-navigation-drawer';
import { connect } from 'react-redux';
import { setCurrentUri } from '../components/currentUri/actions';
import { Hamburger } from '../components/hamburger';
import { loadInitializationData } from '../api';
import { saveMenu } from '../components/menu/actions';
import { getMenuTs } from '../components/menu/selectors';

import type { MenuItem } from '../components/menu/selectors';
import type { Notification, NotificationOpen } from 'react-native-firebase';
import type { NavigationScreenProp } from 'react-navigation';
import type { Dispatch } from 'redux';

type Props = {
    navigation: NavigationScreenProp<{}>,
    setCurrentUri: (uri: string) => void,
    uri: string,
    saveMenu: (items: MenuItem[]) => void,
    menuTs: number
};

class HomeScreenComponent extends Component<Props, {}> {
    static navigationOptions = ({ navigation }: { navigation: NavigationScreenProp }) => ({
        headerTintColor: '#f2b705',
        headerStyle: {
            backgroundColor: '#038b8b',
            shadowOpacity: 0,
            shadowOffset: {
                height: 0,
                width: 0
            },
            shadowRadius: 0,
            elevation: 0,
            borderBottomWidth: 0
        },
        headerLeft: () => (
            <Hamburger onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()); }} />
        )
    });

    componentDidMount = async () => {
        const initializationData = await loadInitializationData();

        // this.props.saveMenu(initializationData.menu);

        const notificationOpen = await firebase.notifications().getInitialNotification();

        if (notificationOpen) {
            this.onNotificationOpen(notificationOpen);
        } else {
            this.props.setCurrentUri(initializationData.mainPageUrl);
        }
    }

    componentDidUpdate = async () => {
        const reloadMenu = (new Date().getTime() - (0 + this.props.menuTs)) > 10000;

        if (reloadMenu) {
            const initializationData = await loadInitializationData();

            this.props.saveMenu(initializationData.menu);
        }
    }

    onNotificationOpen = (notificationOpen: NotificationOpen) => {
        const { notification } = notificationOpen;
        this.onNotification(notification);
    }

    onNotification = (notification: Notification) => {
        const { data } = notification;

        console.log(notification);

        this.props.setCurrentUri(data.uri);
    }

    componentWillUnmount() {
        firebase.notifications().onNotification(() => { });
    }

    render() {
        return (
            <>
                <WebView source={{ uri: this.props.uri }} />
            </>
        );
    }
}

const mapStateToProps = (state: any) => ({
    uri: state.currentUri.uri,
    menuTs: getMenuTs(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setCurrentUri: (uri: string) => dispatch(setCurrentUri(uri)),
    saveMenu: (items: MenuItem[]) => dispatch(saveMenu(items))
});

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreenComponent);

