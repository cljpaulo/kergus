import React from 'react';
import { Button, Text, View } from 'react-native';
import { useReduxDispatch, useReduxSelector } from '../../Redux';
import { currentStage } from '../../Redux/Current-Stage';

const Dashboard = (): React.ReactElement => {
    const value = useReduxSelector(state => state.currentStage);
    const dispatch = useReduxDispatch();

    return (
        <View style={{ marginTop: '15%' }}>
            <Button title="increment" onPress={() => dispatch(currentStage('Dashboard'))} />
            <Text style={{ color: 'red', marginLeft: 20 }}>{value}</Text>
        </View>
    );
};

export default Dashboard;
