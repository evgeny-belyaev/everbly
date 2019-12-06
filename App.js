// @flow

import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <Text>Hello world</Text>
            </SafeAreaView>
        </>
    );
};

export default App;
