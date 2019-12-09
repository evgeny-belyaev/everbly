// @flow

import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { ScrollView } from 'react-native-gesture-handler';
import { Hamburger } from '../components/hamburger';
import type { NavigationScreenProp } from 'react-navigation';

type Props = {

};

const Style = {
    container: {
        margin: 20
    },
    text: {
        fontSize: 20,
        paddingBottom: 10,
    }
}

export class About extends Component<Props, {}> {
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
            <Hamburger onPress={() => { navigation.pop() }} />
        )
    });

    render() {
        return (
            <SafeAreaView style={Style.container}>
                <ScrollView>
                    <Text style={Style.text}>Everbly.com - это самый быстро развивающийся проект интеллектуальных онлайн развлечений в России.</Text>
                    <Text style={Style.text}>Каждый человек не может представить свою жизнь без современных телефонов и компьютеров. Они открывают нам доступ к огромному количеству информации в интернете. Мы читаем новости, общаемся с друзьями и незнакомцами, отдыхаем и развлекаемся с помощью различных девайсов. И несмотря на большое разнообразие информации и возможностей, большинство россиян чаще всего используют интернет для просмотра социальных сетей. К сожалению, качество информации в этих источниках очень низкое.</Text>
                    <Text style={Style.text}>Everbly.com был созданы, чтобы дать вам возможность весело и разнообразно провести время в интернете с пользой для себя. Вместо просмотра некачественного контента в социальных сетях вы теперь можете проходить интересные тесты на эрудицию, кругозор и знания в определенных сферах. Коллекция наших тестов постоянно пополняется, так как их создают целая команда профессиональных специалистов. Они продумывают каждый вопрос, чтобы вы могли найти тест подходящего уровня сложности. Мы предлагаем как сложные тесты на эрудицию, так и простые развлекательные и психологические тесты, результаты которых вас удивят!</Text>
                    <Text style={Style.text}>Есть у вас всего минута или целый час, вы можете быть уверены, что проведете это время с пользой, получите удовольствие и сможете по-настоящему отвлечься от забот и рутины. Многие наши пользователи проходят по несколько тестов за один сеанс. Например, вы можете начать со сложного теста на знания. Так вы сможете себя проверить и подумать над вопросами, на которые мало кто может сходу ответить. А после этого пройдите развлекательный тест на знание вашего любимого фильма и обновите положительные эмоции, полученные от его просмотра!</Text>
                </ScrollView>

            </SafeAreaView>
        );
    }
}
