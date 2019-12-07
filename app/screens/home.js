// @flow

import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import { WebView } from 'react-native-webview';
import { DrawerActions } from 'react-navigation-drawer';
import { connect } from 'react-redux';
import { setCurrentUri } from '../components/currentUri/actions';
import { Hamburger } from '../components/hamburger';

import type { Notification, NotificationOpen } from 'react-native-firebase';
import type { NavigationScreenProp } from 'react-navigation';
import type { Dispatch } from 'redux';

type Props = {
    navigation: NavigationScreenProp<{}>,
    setCurrentUri: (uri: string) => void,
    uri: string
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
        const notificationOpen = await firebase.notifications().getInitialNotification();

        if (notificationOpen) {
            this.onNotificationOpen(notificationOpen);
        } else {
            this.props.setCurrentUri('https://everbly.com');
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
        console.log('render');

        return (
            <>
                <WebView source={{ uri: this.props.uri }} />
            </>
        );
    }
}
const mapStateToProps = (state: any) => ({
    uri: state.currentUri.uri
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setCurrentUri: (uri: string) => dispatch(setCurrentUri(uri))
});

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreenComponent);

