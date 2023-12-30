import db from '../../../../../Services/DB';

interface InsertDataProps {
    date: string;
    type: string;
    description: string;
    value: string;
}

const insertData = ({ date, type, description, value }: InsertDataProps) => {
    db.transaction((tx: any) => {
        tx.executeSql(
            `
      INSERT INTO financial_history (date, type, description, value)
      VALUES (?, ?, ?, ?);
      `,
            [date, type, description, value],
            (_: any, result: any) => {
                console.log('Dados inseridos com sucesso!', result);
            },
            (_: any, error: any) => {
                console.error('Erro ao inserir dados:', error);
            },
        );
    });
};

export default insertData;
