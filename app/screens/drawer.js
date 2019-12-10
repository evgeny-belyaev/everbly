// @flow
import React, { Component } from 'react';
import { SafeAreaView, Text, TouchableHighlight, View, ScrollView } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { connect } from 'react-redux';
import { setCurrentUri } from '../components/currentUri/actions';
import { getMenuItems } from '../components/menu/selectors';

import type { NavigationScreenProp } from 'react-navigation';
import type { Dispatch } from 'redux';
import type { MenuItem } from '../components/menu/selectors';

const Style = {
    container: { flex: 1, paddingBottom: 10, },
    item: { margin: 5, marginLeft: 30, borderBottomWidth: 1, borderBottomColor: '#038b8b', padding: 5, marginRight: 15, },
    itemText: { fontSize: 16, fontWeight: '400', },
    scroll: {
        flexGrow: 1,
        flexDirection: 'column'
    },
    contentContainerStyle: { justifyContent: 'space-between' }
};

type PropsItem = {
    title: string,
    url?: string,
    open: (url?: string) => void
};

const Item = (props: PropsItem): React$Node => {
    const onPress = () => props.open(props.url);

    return (
        <TouchableHighlight style={Style.item} onPress={onPress} underlayColor='transparent'>
            <Text style={Style.itemText}>{props.title}</Text>
        </TouchableHighlight>
    );
};

type Props = {
    navigation: NavigationScreenProp<{}>,
    setCurrentUri: (uri: string) => void,
    menu: MenuItem[]
};

class DrawerComponent extends Component<Props, {}> {
    openQuiz = (uri?: string) => {
        if (uri) {
            this.props.setCurrentUri(uri);
            this.props.navigation.dispatch(DrawerActions.toggleDrawer());
        }
    };

    openAbout = () => {
        this.props.navigation.dispatch(DrawerActions.toggleDrawer());
        this.props.navigation.navigate('About');
    }

    renderItems = (): React$Node => {
        return this.props.menu.map((item: MenuItem) => (
            <Item open={this.openQuiz} title={item.title} url={item.url} key={item.url}></Item>
        ));
    }

    render() {
        return (
            <SafeAreaView style={Style.container} >
                <ScrollView style={Style.scroll} bounces={false} contentContainerStyle={Style.contentContainerStyle}>
                    <View>
                        {this.renderItems()}
                    </View>
                </ScrollView>

                <Item open={this.openAbout} title='О приложении'></Item>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state: any) => ({
    menu: getMenuItems(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setCurrentUri: (uri: string) => dispatch(setCurrentUri(uri))
});

export const Drawer = connect(mapStateToProps, mapDispatchToProps)(DrawerComponent);

