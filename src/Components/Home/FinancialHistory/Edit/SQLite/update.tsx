import { currentStage } from '../../../../../Redux/Current-Stage';
import db from '../../../../../Services/DB';
import { showToast } from '../../../../MyToast';

const updateData = (
    id: string,
    date: string,
    type: string,
    description: string,
    value: string,
    dispatch: any,
) => {
    db.transaction((tx: any) => {
        tx.executeSql(
            `
            UPDATE financial_history
            SET date = ?, type = ?, description = ?, value = ?
            WHERE id = ?;
            `,
            [date, type, description, value, id],
            (_: any, result: any) => {
                showToast('success', 'Sucesso', 'Registro atualizado com sucesso!');

                setTimeout(() => {
                    dispatch(currentStage('Financial History'));
                }, 3000);
            },
            (_: any, error: any) => {
                showToast('error', 'Erro', 'Registro não atualizado!');
            },
        );
    });
};

export default updateData;
