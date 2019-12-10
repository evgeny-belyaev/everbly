// @flow

import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { connect } from 'react-redux';
import { getConfig } from '../components/config/selectors';
import { HeaderBackButton } from 'react-navigation-stack';

import type { NavigationScreenProp } from 'react-navigation';

type Props = {
    uri: string
};

class AboutComponent extends Component<Props, {}> {
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
            <HeaderBackButton onPress={() => { navigation.pop(); }} tintColor='white' />
        )
    });

    render() {
        return (
            <WebView source={{ uri: this.props.uri }}></WebView>
        );
    }
}

const mapStateToProps = (state: any) => ({
    uri: getConfig(state).pages.contact
});

export const About = connect(mapStateToProps)(AboutComponent);

