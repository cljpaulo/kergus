import { NavigationContainer } from '@react-navigation/native';
import Template from './src/Components/Template';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/Screens/Splash';
import Welcome from './src/Screens/Welcome';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
        <Stack.Screen name="Main" component={Template} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}