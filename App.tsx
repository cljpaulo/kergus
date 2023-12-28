import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import Template from './src/Components/Template';
import store from './src/Redux';
import Splash from './src/Screens/Splash';
import Welcome from './src/Screens/Welcome';

export default function App() {
    const Stack = createStackNavigator();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Main">
                    <Stack.Screen
                        name="Splash"
                        component={Splash}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Welcome"
                        component={Welcome}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Main"
                        component={Template}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
