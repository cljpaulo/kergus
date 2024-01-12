import { Rubik_300Light, Rubik_600SemiBold, useFonts } from '@expo-google-fonts/rubik';
import { Text, View } from 'react-native';
import { getGreeting } from '../../../Utils/Greeting';
import { getMonthYearString } from '../../../Utils/MonthYearString';
import { headerStyles } from './style';

export default function Header() {
    const [fontsLoaded] = useFonts({
        Rubik_600SemiBold,
        Rubik_300Light,
    });

    if (!fontsLoaded) {
        return null;
    }

    const greeting = getGreeting();
    const monthYearString = getMonthYearString();

    return (
        <View style={headerStyles.container}>
            <Text style={headerStyles.greetingText}>{greeting}</Text>
            <Text style={headerStyles.monthYearText}>{monthYearString}</Text>
        </View>
    );
}
