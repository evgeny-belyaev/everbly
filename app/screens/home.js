// @flow

import React, { Component } from 'react';
import firebase from 'react-native-firebase';
import { WebView } from 'react-native-webview';
import { DrawerActions } from 'react-navigation-drawer';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import { loadConfig } from '../components/config/actions';
import { getConfig } from '../components/config/selectors';
import { setCurrentUri } from '../components/currentUri/actions';
import { Hamburger } from '../components/hamburger';

import type { Notification, NotificationOpen } from 'react-native-firebase';
import type { NavigationScreenProp } from 'react-navigation';
import type { Dispatch } from 'redux';
import type { ConfigState } from '../components/config/selectors';

type Props = {
    navigation: NavigationScreenProp<{}>,
    setCurrentUri: (uri: string) => void,
    uri: string,
    loadConfig: () => void,
    menuTs: number,
    config: ConfigState
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

    constructor(props: Props) {
        super(props);
        this.WEBVIEW_REF = React.createRef();
    }

    componentDidMount = async () => {
        BackHandler.addEventListener('hardwareBackPress', this.backHandler);

        const notificationOpen = await firebase.notifications().getInitialNotification();

        if (notificationOpen) {
            this.onNotificationOpen(notificationOpen);
        }
    }

    componentDidUpdate = (prevProps: Props) => {
        if (this.props.config.pages.main != prevProps.config.pages.main) {
            this.props.setCurrentUri(this.props.config.pages.main);
        }
    }

    backHandler = () => {
        if (this.canGoBack) {
            this.WEBVIEW_REF.current.goBack();
            return true;
        } else {
            return false;
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
        BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
        firebase.notifications().onNotification(() => { });
    }

    onNavigationStateChange(navState) {
        this.setState({
            canGoBack: navState.canGoBack
        });
    }

    render() {
        return this.props.uri ? (
            <WebView
                ref={this.WEBVIEW_REF}
                startInLoadingState={false}
                onNavigationStateChange={navState => {
                    // Keep track of going back navigation within component
                    this.canGoBack = navState.canGoBack;
                }}
                source={{ uri: this.props.uri }} />
        ) : null;

    }
}

const mapStateToProps = (state: any) => ({
    uri: state.currentUri.uri,
    config: getConfig(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setCurrentUri: (uri: string) => dispatch(setCurrentUri(uri)),
    loadConfig: () => dispatch(loadConfig())
});

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreenComponent);

