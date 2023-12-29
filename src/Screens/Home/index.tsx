import { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import BalanceCard from '../../Components/Home/BalanceCard';
import Header from '../../Components/Home/Header';
import db from '../../Services/DB';

export default function Home() {
    useEffect(() => {
        // Execute a criação da tabela dentro de uma transação
        db.transaction(
            tx => {
                tx.executeSql(
                    'CREATE TABLE IF NOT EXISTS teste (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT)',
                );
            },
            undefined,
            checkTableCreation,
        );
    }, []);

    // Verifique se a tabela foi criada com sucesso
    const checkTableCreation = () => {
        // Execute uma consulta para verificar se a tabela existe
        db.transaction(tx => {
            tx.executeSql(
                'SELECT name FROM sqlite_master WHERE type="table" AND name="teste"',
                [],
                (_, result) => {
                    if (result.rows.length > 0) {
                        console.log('Tabela "teste" criada com sucesso!');
                    } else {
                        console.error('Erro ao criar a tabela "teste".');
                    }
                },
            );
        });
    };

    return (
        <ScrollView>
            <View style={{ backgroundColor: '#0B0B81', height: 200 }} />
            <Header />
            <BalanceCard />
        </ScrollView>
    );
}
