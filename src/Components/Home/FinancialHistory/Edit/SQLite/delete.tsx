import { currentStage } from '../../../../../Redux/Current-Stage';
import db from '../../../../../Services/DB';
import { showToast } from '../../../../MyToast';

const deleteData = (id: string, dispatch: any) => {
    db.transaction((tx: any) => {
        tx.executeSql(
            `
            DELETE FROM financial_history
            WHERE id = ?;
            `,
            [id],
            (_: any, result: any) => {
                showToast('success', 'Sucesso', 'Registro excluído com sucesso!');
                console.log('excluido');

                setTimeout(() => {
                    dispatch(currentStage('Financial History'));
                }, 3000);
            },
            (_: any, error: any) => {
                console.log('erro ao excluir');
                showToast('error', 'Erro', 'Registro não excluído!');
            },
        );
    });
};

export default deleteData;
