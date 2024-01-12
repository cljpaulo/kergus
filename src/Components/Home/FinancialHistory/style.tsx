// style.tsx
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const financialHistoryStyles = StyleSheet.create({
    title: {
        marginLeft: 20,
        color: 'black',
        marginTop: 20,
        fontFamily: 'Rubik_600SemiBold',
        fontSize: RFValue(14),
    },
    addButton: {
        backgroundColor: '#0B0B81',
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginRight: 20,
    },
    addButtonText: {
        color: 'white',
        fontFamily: 'Rubik_300Light',
        fontSize: RFValue(12),
    },
    card: {
        marginHorizontal: 20,
        marginTop: 30,
        borderRadius: 10,
    },
    categoryLabel: {
        padding: 5,
        marginTop: -15,
        backgroundColor: 'black',
        borderTopRightRadius: 5,
        borderBottomLeftRadius: 5,
        alignSelf: 'center',
    },
    categoryText: {
        fontFamily: 'Rubik_600SemiBold',
        fontSize: RFValue(12),
        color: 'white',
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    descriptionText: {
        fontFamily: 'Rubik_600SemiBold',
        fontSize: RFValue(12),
        marginBottom: 5,
    },
    valueText: {
        fontFamily: 'Rubik_600SemiBold',
        fontSize: RFValue(12),
        color: '#18A31E',
    },
    editButton: {
        paddingVertical: 20,
        paddingLeft: 20,
    },
    notFoundText: {
        color: 'black',
        fontFamily: 'Rubik_300Light',
        fontSize: RFValue(12),
        marginTop: 5,
        marginLeft: 20,
    },
    notFoundButton: {
        backgroundColor: '#0B0B81',
        marginVertical: 30,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginRight: 20,
    },
});
