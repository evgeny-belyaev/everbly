// @flow

import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { DrawerActions } from 'react-navigation-drawer';
import { Hamburger } from '../components/hamburger';
import firebase from 'react-native-firebase';

import type { Notification, NotificationOpen } from 'react-native-firebase';
import type { NavigationScreenProp } from 'react-navigation';

type Props = {
    navigation: NavigationScreenProp<{}>
};

type State = {
    uri: string
};

export class HomeScreen extends Component<Props, State> {
    state = {
        uri: ''
    }

    constructor(props: Props) {
        super(props);
    }

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
        firebase.notifications().onNotification(this.onNotification);

        const notificationOpen = await firebase.notifications().getInitialNotification();

        if (notificationOpen) {
            this.onNotificationOpen(notificationOpen);
        } else {
            this.setState({
                uri: 'https://everbly.com'
            });
        }
    }

    onNotificationOpen = (notificationOpen: NotificationOpen) => {
        const { notification } = notificationOpen;
        this.onNotification(notification);
    }

    onNotification = (notification: Notification) => {
        const { data } = notification;

        console.log(notification);

        this.setState({ uri: data.uri });
    }

    componentWillUnmount() {
        firebase.notifications().onNotification(() => { });
    }

    render() {
        return (
            <>
                <WebView source={{ uri: this.state.uri }} />
            </>
        );
    }
}

