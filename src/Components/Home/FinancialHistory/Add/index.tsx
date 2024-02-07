import { Rubik_300Light, Rubik_600SemiBold, useFonts } from '@expo-google-fonts/rubik';
import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Appbar } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import Toast from 'react-native-toast-message';
import { useReduxDispatch } from '../../../../Redux';
import { currentStage } from '../../../../Redux/Current-Stage';
import { formatCurrencyValue } from '../../../../Utils/FormatCurrencyValue';
import { getMonthYearString } from '../../../../Utils/MonthYearString';
import { showToast } from '../../../MyToast';
import { toastConfig } from '../../../MyToast/toastConfig';
import insertData from './SQLite/insert';
import { categories } from './categories';
import { addFinancialHistoryStyles as styles } from './style';

export default function AddFinancialHistory() {
    const [fontsLoaded] = useFonts({
        Rubik_600SemiBold,
        Rubik_300Light,
    });

    const dispatch = useReduxDispatch();

    const [type, setType] = useState<any>(null);
    const [isFocusType, setIsFocusType] = useState<boolean>(false);
    const [description, setDescription] = useState<string>();
    const [value, setValue] = useState<string>();

    const addNewValue = () => {
        if (type && description && value) {
            const monthYearString = getMonthYearString();
            const formattedValue = formatCurrencyValue(value);
            insertData(monthYearString, type, description, formattedValue, dispatch);
        } else {
            showToast('info', 'Atenção', 'Preencha todos os campos obrigatórios!');
        }
    };

    const renderItem = (item: any) => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
            </View>
        );
    };

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View>
            <Appbar.Header style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => dispatch(currentStage('Financial History'))}>
                    <MaterialIcons name="arrow-back-ios" color="white" size={RFValue(22)} />
                </TouchableOpacity>
                <Text style={styles.headerText}>Adicionar Novo Registro</Text>
            </Appbar.Header>
            <ScrollView style={styles.scrollView}>
                <View style={styles.contentContainer}>
                    <Text style={styles.headingText}>Preencha todos os campos</Text>

                    <View style={styles.formSection}>
                        <Text style={styles.formLabel}>
                            Selecione uma categoria<Text style={{ color: 'red' }}>*</Text>
                        </Text>
                        <Dropdown
                            style={[styles.dropdown, isFocusType && { borderColor: 'blue' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            data={categories}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocusType ? 'Selecionar' : '...'}
                            searchPlaceholder="Buscar..."
                            value={type}
                            onFocus={() => setIsFocusType(true)}
                            onBlur={() => setIsFocusType(false)}
                            onChange={item => {
                                setType(item.value);
                                setIsFocusType(false);
                            }}
                            renderItem={renderItem}
                        />
                    </View>
                    <View style={styles.formSection}>
                        <Text style={styles.formLabel}>
                            Descrição do registro<Text style={{ color: 'red' }}>*</Text>
                        </Text>
                        <TextInput
                            placeholder="Ex: Salário"
                            style={styles.textInput}
                            onChangeText={(description: string) => setDescription(description)}
                        />
                    </View>
                    <View style={styles.formSection}>
                        <Text style={styles.formLabel}>
                            Valor do registro<Text style={{ color: 'red' }}>*</Text>
                        </Text>
                        <TextInput
                            keyboardType="numeric"
                            placeholder="Ex: 1000.00"
                            style={styles.textInput}
                            onChangeText={(value: string) => setValue(value)}
                        />
                    </View>

                    <TouchableOpacity onPress={addNewValue}>
                        <Text style={styles.addButton}>Adicionar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Toast config={toastConfig} />
        </View>
    );
}
