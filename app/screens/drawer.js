// @flow
import React, { Component } from 'react';
import { SafeAreaView, Text, TouchableHighlight } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';
import { connect } from 'react-redux';
import { setCurrentUri } from '../components/currentUri/actions';

import type { NavigationScreenProp } from 'react-navigation';
import type { Dispatch } from 'redux';

const Style = {
    container: { flex: 1 },
    item: { margin: 15 },
    itemText: { fontSize: 16, fontWeight: '400', }
};

type PropsItem = {
    title: string,
    uri: string,
    open: (string) => void
};

const Item = (props: PropsItem): React$Node => {
    const onPress = () => props.open(props.uri);

    return (
        <TouchableHighlight style={Style.item} onPress={onPress} underlayColor='transparent'>
            <Text style={Style.itemText}>{props.title}</Text>
        </TouchableHighlight>
    );
};

type Props = {
    navigation: NavigationScreenProp<{}>,
    setCurrentUri: (uri: string) => void
};


class DrawerComponent extends Component<Props, {}> {
    render() {
        const { navigation } = this.props;

        const openQuiz = (uri: string) => {
            this.props.setCurrentUri(uri);
            navigation.dispatch(DrawerActions.toggleDrawer());
        };

        return (
            <SafeAreaView style={Style.container} >
                <Item open={openQuiz} title='Насколько вы образованы?' uri='https://everbly.com/ru/%D1%8D%D1%80%D1%83%D0%B4%D0%B8%D1%82'></Item>
                <Item open={openQuiz} title='Хорошо ли вы знаете Россию?' uri='https://everbly.com/ru/%D1%85%D0%BE%D1%80%D0%BE%D1%88%D0%BE-%D0%BB%D0%B8-%D0%B2%D1%8B-%D0%B7%D0%BD%D0%B0%D0%B5%D1%82%D0%B5-%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8E'></Item>
                <Item open={openQuiz} title='Что вы знаете о футболе?' uri='https://everbly.com/ru/soccer'></Item>
                <Item open={openQuiz} title='Тест по географии' uri='https://everbly.com/ru/%D1%82%D0%B5%D1%81%D1%82-%D0%BF%D0%BE-%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B8?nq=nextquiz--%D1%85%D0%BE%D1%80%D0%BE%D1%88%D0%BE-%D0%BB%D0%B8-%D0%B2%D1%8B-%D0%B7%D0%BD%D0%B0%D0%B5%D1%82%D0%B5-%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8E--%D1%82%D0%B5%D1%81%D1%82-%D0%BF%D0%BE-%D0%B3%D0%B5%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B8'></Item>
                <Item open={openQuiz} title='Ух ты, коты!' uri='https://everbly.com/ru/%D1%83%D1%85-%D1%82%D1%8B-%D0%BA%D0%BE%D1%82%D1%8B?nq=nextquiz--%D1%85%D0%BE%D1%80%D0%BE%D1%88%D0%BE-%D0%BB%D0%B8-%D0%B2%D1%8B-%D0%B7%D0%BD%D0%B0%D0%B5%D1%82%D0%B5-%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8E--%D1%83%D1%85-%D1%82%D1%8B-%D0%BA%D0%BE%D1%82%D1%8B'></Item>
            </SafeAreaView>
        );
    }
}


const mapDispatchToProps = (dispatch: Dispatch) => ({
    setCurrentUri: (uri: string) => dispatch(setCurrentUri(uri))
});

export const Drawer = connect(null, mapDispatchToProps)(DrawerComponent);

