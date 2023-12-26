import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home';
import Dashboard from '../../Screens/Dashboard';
import Profile from '../../Screens/Profile';

const Tab = createBottomTabNavigator();

export default function Template() {
    return(
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    )
}