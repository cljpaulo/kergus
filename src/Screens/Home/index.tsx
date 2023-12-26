import { useEffect } from "react";
import { Text } from "react-native";
import db from "../../Services/DB";

export default function Home() {

    
    useEffect(() => {
        // Execute a criação da tabela dentro de uma transação
        db.transaction((tx) => {
          tx.executeSql(
            'CREATE TABLE IF NOT EXISTS teste (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT)'
          );
        }, undefined, checkTableCreation);
      }, []);
    
      // Verifique se a tabela foi criada com sucesso
      const checkTableCreation = () => {
        // Execute uma consulta para verificar se a tabela existe
        db.transaction((tx) => {
          tx.executeSql('SELECT name FROM sqlite_master WHERE type="table" AND name="teste"', [], (_, result) => {
            if (result.rows.length > 0) {
              console.log('Tabela "teste" criada com sucesso!');
            } else {
              console.error('Erro ao criar a tabela "teste".');
            }
          });
        });
      };

    return(
        <Text style={{color: 'black'}}>Home</Text>
    )
}