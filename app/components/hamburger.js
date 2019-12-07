// @flow
import React from 'react';

import { TouchableHighlight, Text } from 'react-native';

type Props = {
    onPress: () => void
};

const Style = {
    icon: {
        fontSize: 30,
        fontWeight: '600',
        color: '#fff',
        marginLeft: 15,
    }
};

export const Hamburger = ({ onPress }: Props): React$Node => {
    return (
        <TouchableHighlight onPress={onPress} underlayColor='transparent'>
            <Text style={Style.icon}>☰</Text>
        </TouchableHighlight>
    );
};
