// @flow

import React, { Component } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';

export class HomeScreen extends Component<{}, {}> {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <WebView
                        source={{ uri: 'https://infinite.red' }}
                        style={{ marginTop: 20 }}
                    />
                </SafeAreaView>
            </>
        );
    }
}

