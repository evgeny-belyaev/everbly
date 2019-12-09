module.exports = {
    'preset': 'react-native',
    'transform': {
        '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js'
    },
    'testPathIgnorePatterns': [
        '/node_modules/',
        '/e2e/'
    ],
    'modulePathIgnorePatterns': [
        'react-native-drawer-layout-polyfill',
        'react-native-drawer-layout',
        'react-native-root-toast',
        'react-native-safe-area-view',
        'react-native-screens',
        'react-native-tab-view',
        'react-navigation-deprecated-tab-navigator',
        'react-navigation-drawer',
        'react-navigation-stack',
        'react-navigation-tabs'
    ],
    'transformIgnorePatterns': [
        'node_modules/(?!(react-native|react-native-version-number)/)'
    ]
};