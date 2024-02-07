import db from '../../../../Services/DB';
import { getMonthYearString } from '../../../../Utils/MonthYearString';

const selectMonthlyFinancialHistory = (
    setFinancialHistory: React.Dispatch<React.SetStateAction<any>>,
) => {
    const monthYearString = getMonthYearString();
    const array: any = [];

    db.transaction((tx: any) => {
        tx.executeSql(
            `
      SELECT * FROM financial_history
      WHERE date = ?;
      `,
            [monthYearString],
            (_: any, result: any) => {
                const len = result.rows.length;
                console.log(`Número de registros encontrados: ${len}`);

                for (let i = 0; i < len; i++) {
                    const row = result.rows.item(i);
                    console.log(`Registro ${i + 1}:`, row);
                    array.push(row);
                }
                setFinancialHistory(array);
            },
            (_: any, error: any) => {
                console.error('Erro ao selecionar dados:', error);
            },
        );
    });
};

export default selectMonthlyFinancialHistory;
