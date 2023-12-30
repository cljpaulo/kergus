import { Rubik_300Light, Rubik_600SemiBold, useFonts } from '@expo-google-fonts/rubik';
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ActivityIndicator, Card } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import { useReduxDispatch } from '../../../Redux';
import { currentStage } from '../../../Redux/Current-Stage';
import createTable from './SQLite/createTable';
import selectData from './SQLite/selectData';
import { categoryColors } from './categoryColors';
import { financialHistoryStyles } from './style';

export default function FinancialHistory() {
    const [fontsLoaded] = useFonts({
        Rubik_600SemiBold,
        Rubik_300Light,
    });

    const [financialHistory, setFinancialHistory] = useState<any>(null);

    useEffect(() => {
        createTable();
    }, []);

    useEffect(() => {
        selectData(setFinancialHistory);
    }, []);

    const dispatch = useReduxDispatch();

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={{ marginBottom: 20 }}>
            <Text style={financialHistoryStyles.title}>Histórico Financeiro</Text>
            {financialHistory && financialHistory.length > 0 ? (
                <>
                    <TouchableOpacity
                        onPress={() => dispatch(currentStage('Add Financial History'))}
                        style={financialHistoryStyles.addButton}>
                        <MaterialIcons name="add" color="white" size={RFValue(22)} />
                        <Text style={financialHistoryStyles.addButtonText}>Adicionar</Text>
                    </TouchableOpacity>
                    {financialHistory?.map((item: any) => (
                        <Card key={item?.id} style={financialHistoryStyles.card}>
                            <View
                                style={[
                                    financialHistoryStyles.categoryLabel,
                                    { backgroundColor: categoryColors[item?.type] || 'black' },
                                ]}>
                                <Text style={financialHistoryStyles.categoryText}>
                                    {item?.type}
                                </Text>
                            </View>
                            <Card.Content>
                                <View style={financialHistoryStyles.cardContent}>
                                    <View>
                                        <Text style={financialHistoryStyles.descriptionText}>
                                            {item?.description}
                                        </Text>
                                        <Text
                                            style={[
                                                financialHistoryStyles.valueText,
                                                {
                                                    color:
                                                        item?.type === 'Renda'
                                                            ? '#18A31E'
                                                            : '#EF1111',
                                                },
                                            ]}>
                                            R$ {item?.type !== 'Renda' ? '-' : ''}
                                            {item?.value}
                                        </Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() =>
                                            dispatch(currentStage('Edit Financial History'))
                                        }>
                                        <View style={financialHistoryStyles.editButton}>
                                            <MaterialIcons name="edit" size={RFValue(22)} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </Card.Content>
                        </Card>
                    ))}
                </>
            ) : financialHistory && financialHistory.length === 0 ? (
                <>
                    <Text style={financialHistoryStyles.notFoundText}>
                        Não foram encontrados registros!
                    </Text>
                    <TouchableOpacity style={financialHistoryStyles.notFoundButton}>
                        <MaterialIcons name="add" color="white" size={RFValue(22)} />
                        <Text style={financialHistoryStyles.addButtonText}>
                            Adicionar Novo Registro
                        </Text>
                    </TouchableOpacity>
                </>
            ) : (
                <ActivityIndicator
                    size="large"
                    style={{ marginTop: 50 }}
                    animating
                    color="#0B0B81"
                />
            )}

            <View />
        </View>
    );
}
