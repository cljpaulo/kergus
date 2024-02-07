import { Rubik_300Light, Rubik_600SemiBold, useFonts } from '@expo-google-fonts/rubik';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Modal, ModalContent } from 'react-native-modals';
import { Appbar } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
import { RootState, useReduxDispatch } from '../../../../Redux';
import { currentStage } from '../../../../Redux/Current-Stage';
import { customFormatCurrencyValue } from '../../../../Utils/CustomFormatCurrencyValue';
import { getMonthYearString } from '../../../../Utils/MonthYearString';
import { showToast } from '../../../MyToast';
import { toastConfig } from '../../../MyToast/toastConfig';
import deleteData from './SQLite/delete';
import updateData from './SQLite/update';
import { categories } from './categories';
import { editFinancialHistoryStyles as styles } from './style';

export default function EditFinancialHistory() {
    const [fontsLoaded] = useFonts({
        Rubik_600SemiBold,
        Rubik_300Light,
    });

    const dispatch = useReduxDispatch();
    const currentValue = useSelector((state: RootState) => state.currentValue);

    const [type, setType] = useState<any>(currentValue.type || '');
    const [isFocusType, setIsFocusType] = useState<boolean>(false);
    const [description, setDescription] = useState<string>(currentValue.description || '');
    const [value, setValue] = useState<string>(currentValue.value || '');
    const [modalIsVisible, setModalIsVisible] = useState(false);

    const editValue = () => {
        if (type && description && value) {
            const monthYearString = getMonthYearString();
            const formattedValue = customFormatCurrencyValue(value);

            updateData(
                currentValue.id,
                monthYearString,
                type,
                description,
                formattedValue,
                dispatch,
            );
        } else {
            showToast('info', 'Atenção', 'Preencha todos os campos obrigatórios!');
        }
    };

    const deleteValue = () => {
        setModalIsVisible(false);
        deleteData(currentValue.id, dispatch);
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
                <Text style={styles.headerText}>Editar Registro</Text>
            </Appbar.Header>
            <ScrollView style={styles.scrollView}>
                <View style={styles.contentContainer}>
                    <Modal
                        visible={modalIsVisible}
                        onTouchOutside={() => {
                            setModalIsVisible(false);
                        }}>
                        <ModalContent>
                            <Octicons
                                name="alert"
                                color="red"
                                style={{ alignSelf: 'center' }}
                                size={RFValue(26)}
                            />
                            <Text style={styles.textConfirmDelete}>
                                Tem certeza que deseja excluir este registro?
                            </Text>
                            <View style={styles.groupButtonsModal}>
                                <TouchableOpacity onPress={() => setModalIsVisible(false)}>
                                    <Text style={styles.cancelButton}>Cancelar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={deleteValue}>
                                    <Text style={styles.confirmDeleteButton}>Excluir</Text>
                                </TouchableOpacity>
                            </View>
                        </ModalContent>
                    </Modal>

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
                            value={description}
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
                            value={value}
                            onChangeText={(value: string) => setValue(value)}
                        />
                    </View>

                    <View style={styles.groupButtons}>
                        <TouchableOpacity onPress={() => setModalIsVisible(true)}>
                            <Text style={styles.deleteButton}>Excluir</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={editValue}>
                            <Text style={styles.editButton}>Editar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <Toast config={toastConfig} />
        </View>
    );
}
