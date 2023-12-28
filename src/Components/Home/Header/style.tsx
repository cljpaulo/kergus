import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const headerStyles = StyleSheet.create({
    container: {
        marginTop: -180,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    greetingText: {
        fontFamily: 'Rubik_600SemiBold',
        color: 'white',
        fontSize: RFValue(14),
    },
    monthYearText: {
        fontFamily: 'Rubik_600SemiBold',
        color: 'white',
    },
});
