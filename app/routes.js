// @flow


import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from './screens/home';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Drawer } from './screens/drawer';
import { Dimensions } from 'react-native';

const DrawerNavigator = createDrawerNavigator(
    {
        Content: {
            screen: createStackNavigator({ HomeStack: { screen: HomeScreen } })
        }
    },
    {
        headerMode: 'flex',
        contentComponent: Drawer,
        drawerWidth: Dimensions.get('window').width * 0.85
    });

export const AppNavigator = createStackNavigator(
    {
        DrawerStack: {
            screen: DrawerNavigator
        }
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
);


