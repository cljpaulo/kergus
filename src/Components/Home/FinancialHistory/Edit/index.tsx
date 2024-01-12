import React from 'react';
import { Button, View } from 'react-native';
import { useReduxDispatch } from '../../../../Redux';
import { currentStage } from '../../../../Redux/Current-Stage';

export default function EditFinancialHistory() {
    const dispatch = useReduxDispatch();
    return (
        <View style={{ marginTop: '15%' }}>
            <Button
                title="Voltar do Editar"
                onPress={() => dispatch(currentStage('Financial History'))}
            />
        </View>
    );
}
