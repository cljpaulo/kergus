import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../../Screens/Dashboard';
import Home from '../../Screens/Home';
import Profile from '../../Screens/Profile';

const Tab = createBottomTabNavigator();

export default function Template() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            <Tab.Screen name="Dashboard" component={Dashboard} />
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}
