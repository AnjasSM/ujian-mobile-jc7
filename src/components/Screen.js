import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Timeline from './Timeline';
import PostPictForm from './PostPictForm';
import { Icon } from 'react-native-elements'

export default createBottomTabNavigator({
    Timeline: {
        screen: Timeline,
        navigationOptions: {
            tabBarLabel: "Timeline",
            tabBarIcon: ({ tintColor }) => <Icon name='home' color={tintColor} size={35} />,
        },
    },
    Post: {
        screen: PostPictForm,
        navigationOptions: {
            tabBarLabel: "Profile",
            tabBarIcon: ({ tintColor }) => <Icon name='add' color={tintColor} size={35} />,
        },
    },
});

