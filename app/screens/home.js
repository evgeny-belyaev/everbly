// @flow

import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { DrawerActions } from 'react-navigation-drawer';
import { Hamburger } from '../components/hamburger';

import type { NavigationScreenProp } from 'react-navigation';

type Props = {
    navigation: NavigationScreenProp<{}>
};

export class HomeScreen extends Component<Props, {}> {
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

    render() {
        return (
            <>
                <WebView
                    source={{ uri: 'https://everbly.com' }}
                />

            </>
        );
    }
}

