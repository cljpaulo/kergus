import db from '../../../../Services/DB';

const createTable = () => {
    db.transaction((tx: any) => {
        // tx.executeSql('DROP TABLE IF EXISTS financial_history', [], (_, result) => {
        //   console.log('Tabela "financial_history" excluída com sucesso.');
        // }, (_, error) => {
        //   console.error('Erro ao excluir a tabela "financial_history":', error);
        // });

        // Verifica se a tabela já existe
        tx.executeSql(
            `
      SELECT name
      FROM sqlite_master
      WHERE type='table' AND name='financial_history';
      `,
            [],
            (_: any, result: any) => {
                if (result.rows.length === 0) {
                    tx.executeSql(
                        `
            CREATE TABLE financial_history (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              date TEXT,
              type TEXT,
              description TEXT,
              value TEXT
            );
            `,
                        [],
                        (_: any, createResult: any) => {
                            console.log('Tabela criada com sucesso!', createResult);
                        },
                        (_: any, createError: any) => {
                            console.error('Erro ao criar a tabela:', createError);
                        },
                    );
                } else {
                    console.log('A tabela já existe. Não é necessário criar novamente.');
                }
            },
            (_: any, error: any) => {
                console.error('Erro ao verificar a existência da tabela:', error);
            },
        );
    });
};

export default createTable;
