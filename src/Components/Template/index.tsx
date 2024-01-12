import { Foundation } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import Dashboard from '../../Screens/Dashboard';
import Home from '../../Screens/Home';
import Profile from '../../Screens/Profile';

const Tab = createBottomTabNavigator();

export default function Template() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#FF8C00',
                tabBarInactiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: '#0B0B81',
                    height: 60,
                },
                tabBarLabelStyle: {
                    display: 'none',
                },
                tabBarIconStyle: {
                    marginTop: 5,
                },
            }}>
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ color }: any) => (
                        <Foundation name="graph-pie" size={RFValue(30)} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }: any) => (
                        <Foundation name="home" size={RFValue(30)} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ color }: any) => (
                        <Foundation name="torso" size={RFValue(30)} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
