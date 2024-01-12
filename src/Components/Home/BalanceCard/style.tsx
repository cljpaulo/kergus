import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const balancedCardStyles = StyleSheet.create({
    linearGradient: {
        marginHorizontal: 20,
        borderRadius: 20,
        padding: 30,
    },
    sectionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionTextContainer: {
        paddingLeft: 5,
        borderLeftWidth: 5,
    },
    sectionText: {
        fontFamily: 'Rubik_600SemiBold',
        fontSize: RFValue(12),
        color: 'white',
    },
    eyeIcon: {
        color: 'white',
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginVertical: 20,
    },
});
