import React from 'react';
import { Button, Text, View } from 'react-native';
import { useReduxDispatch, useReduxSelector } from '../../Redux';
import { etapaAtual } from '../../Redux/Etapa-Atual';

const Dashboard = (): React.ReactElement => {
    const value = useReduxSelector(state => state.etapaAtual);
    const dispatch = useReduxDispatch();

    return (
        <View style={{ marginTop: '15%' }}>
            <Button title="increment" onPress={() => dispatch(etapaAtual('Dashboard'))} />
            <Text style={{ color: 'red', marginLeft: 20 }}>{value}</Text>
        </View>
    );
};

export default Dashboard;
