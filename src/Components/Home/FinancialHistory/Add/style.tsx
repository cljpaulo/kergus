import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const addFinancialHistoryStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontFamily: 'Rubik_300Light',
        fontSize: RFValue(12),
    },
    placeholderStyle: {
        fontFamily: 'Rubik_300Light',
        fontSize: RFValue(12),
    },
    selectedTextStyle: {
        fontFamily: 'Rubik_300Light',
        fontSize: RFValue(12),
    },
    inputSearchStyle: {
        height: 40,
        fontFamily: 'Rubik_300Light',
        fontSize: RFValue(12),
    },
    header: {
        height: 100,
        backgroundColor: '#0B0B81',
        marginHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        marginRight: 16,
    },
    headerText: {
        color: 'white',
        flex: 1,
        textAlign: 'center',
        fontFamily: 'Rubik_600SemiBold',
        fontSize: RFValue(14),
    },
    scrollView: {
        flex: 1,
    },
    contentContainer: {
        marginVertical: 30,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    headingText: {
        color: 'black',
        fontFamily: 'Rubik_600SemiBold',
        fontSize: RFValue(14),
        marginBottom: 30,
    },
    formSection: {
        marginBottom: 20,
    },
    formLabel: {
        color: 'black',
        fontFamily: 'Rubik_300Light',
        fontSize: RFValue(13),
        marginBottom: 5,
        borderLeftWidth: 3,
        borderLeftColor: '#3F3FD2',
        paddingLeft: 8,
    },
    textInput: {
        height: 40,
        width: 300,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        paddingHorizontal: 10,
        fontFamily: 'Rubik_300Light',
        fontSize: RFValue(12),
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontFamily: 'Rubik_300Light',
        fontSize: RFValue(12),
        color: 'black',
    },
    addButton: {
        backgroundColor: '#0B0B81',
        color: 'white',
        fontFamily: 'Rubik_300Light',
        fontSize: RFValue(12),
        textAlignVertical: 'center',
        textAlign: 'center',
        height: 40,
        width: 120,
        borderRadius: 8,
    },
});
