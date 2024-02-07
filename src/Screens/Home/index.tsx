import { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import BalanceCard from '../../Components/Home/BalanceCard';
import FinancialHistory from '../../Components/Home/FinancialHistory';
import AddFinancialHistory from '../../Components/Home/FinancialHistory/Add';
import EditFinancialHistory from '../../Components/Home/FinancialHistory/Edit';
import Header from '../../Components/Home/Header';
import { useReduxDispatch, useReduxSelector } from '../../Redux';
import { currentStage } from '../../Redux/Current-Stage';

export default function Home() {
    const stage = useReduxSelector(state => state.currentStage);
    const dispatch = useReduxDispatch();

    useEffect(() => {
        dispatch(currentStage('Financial History'));
    }, []);

    return (
        <ScrollView>
            {stage === 'Financial History' ? (
                <>
                    <View style={{ backgroundColor: '#0B0B81', height: 200 }} />
                    <Header />
                    <BalanceCard />
                    <FinancialHistory />
                </>
            ) : stage === 'Add Financial History' ? (
                <AddFinancialHistory />
            ) : (
                <EditFinancialHistory />
            )}
        </ScrollView>
    );
}
