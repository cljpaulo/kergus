import { currentStage } from '../../../../../Redux/Current-Stage';
import db from '../../../../../Services/DB';
import { showToast } from '../../../../MyToast';

const insertData = (
    date: string,
    type: string,
    description: string,
    value: string,
    dispatch: any,
) => {
    db.transaction((tx: any) => {
        tx.executeSql(
            `
      INSERT INTO financial_history (date, type, description, value)
      VALUES (?, ?, ?, ?);
      `,
            [date, type, description, value],
            (_: any, result: any) => {
                showToast('success', 'Sucesso', 'Registro inserido com sucesso!');

                setTimeout(() => {
                    dispatch(currentStage('Financial History'));
                }, 3000);
            },
            (_: any, error: any) => {
                showToast('error', 'Erro', 'Registro não inserido!');
            },
        );
    });
};

export default insertData;
