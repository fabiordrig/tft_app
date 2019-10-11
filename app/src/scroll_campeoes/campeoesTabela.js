import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Rows, Row, ScrollView } from 'react-native-table-component';

 export default class CampeoesTabela extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Campeão', 'Tier', 'Custo', 'Classe1', 'Classe2', 'Classe3', 'Dano', 'Armadura', 'MR'],
      widthArr: [50, 50, 50, 50, 50, 50, 50, 50, 50],
      tableData: [
        ['Aatrox', '4', '3', 'Demônio', 'Mestre das Lâminas', '-', '42', '25', '20'],
        ['Ahri', '3', '3', 'Selvagem', 'Feticeiro', '-', '27', '20', '20'],
        ['Akali', '3', '4', 'Ninja', 'Assassino', '-', '68', '20', '20'],
        ['Anivia', '1', '5', 'Glacial', 'Elementalista', '-', '32', '20', '20'],
        ['Ashe', '2', '3', 'Glacial', 'Patrulheiro', '-', '45', '20', '20'],
        ['Aurelion Sol', '2', '4', 'Dragão', 'Feticeiro', '-', '24', '20', '20'],
        ['Blitzcrank', '2', '2', 'Robô', 'Lutador', '-', '25', '35', '20'],
        ['Brand', '2', '4', 'Demônio', 'Elementalista', '-', '36', '25', '20'],
        ['Braum', '3', '4', 'Glacial', 'Guardião', '-', '24', '75', '20'],       
        ['Camille', '3', '1', 'Hextec', 'Mestre das Lâminas', '-', '33', '30', '20'],
        ["Cho'Gath", '1', '4', 'Vastinata', 'Lutador', '-', '42', '20', '20'],
        ["Darius", '3', '1', 'Imperial', 'Cavaleiro', '-', '25', '40', '20'],
        ["Draven", '1', '4', 'Imperial', 'Mestre das Lâminas', '-', '52', '25', '20'],
        ["Elise", '4', '1', 'Demônio', 'Metamorfo', '-', '27', '20', '20'],
        ["Evelynn", '4', '3', 'Demônio', 'Assassino', '-', '42', '20', '20'],
        ["Fiora", '5', '1', 'Nobre', 'Mestre das Lâminas', '-', '40', '25', '20'],
        ["Gangplank", '5', '3', 'Pirata', 'Pistoleiro', 'Mestre das Lâminas', '35', '20', '20'],
        ["Garen", '1', '1', 'Nobre', 'Cavaleiro', '-', '30', '40', '20'],
        ["Gnar", '1', '4', 'Selvagem', 'Yordle', 'Metamorfo', '35', '30', '20'],
        ["Graves", '4', '1', 'Pirata', 'Pistoleiro', '-', '30', '30', '20'],
        ["Jayce", '3', '2', 'Hextec', 'Metamorfo', '-', '39', '35', '20'],
        ["Jinx", '3', '4', 'Hextec', 'Pistoleiro', '-', '52', '20', '20'],
        ["Karthus", '2', '5', 'Fantasma', 'Feticeiro', '-', '42', '25', '20'],
        ["Kassadin", '2', '1', 'Vastinata', 'Feticeiro', '-', '22', '35', '20'],
        ["Katarina", '5', '3', 'Imperial', 'Assassino', '-', '42', '20', '20'],
        ["Kayle", '2', '5', 'Nobre', 'Cavaleiro', '-', '70', '40', '20'],
        ["Kennen", '3', '3', 'Ninja', 'Yordle', 'Elementalista', '42', '20', '20'],
        ["Kha'Zix", '2', '1', 'Vastinata', 'Assassino', '-', '33', '20', '20'],
        ["Kindred", '2', '4', 'Fantasma', 'Patrulheiro', '-', '42', '20', '20'],
        ["Leona", '3', '4', 'Nobre', 'Guardião', '-', '24', '100', '20'],
        ["Lissandra", '3', '2', 'Glacial', 'Elementalista', '-', '24', '20', '20'],
        ["Lucian", '3', '2', 'Nobre', 'Pistoleiro', '-', '42', '25', '20'],
        ["Lulu", '3', '2', 'Yordle', 'Feticeiro', '-', '30', '20', '20'],
        ["Miss Fortune", '3', '5', 'Pirata', 'Pistoleiro', '-', '71', '20', '20'],
        ["Mordekaiser", '5', '1', 'Fantasma', 'Cavaleiro', '-', '25', '40', '20'],
        ["Morgana", '3', '3', 'Demônio', 'Feticeiro', '-', '30', '30', '20'],
        ["Nidalee", '3', '1', 'Selvagem', 'Metamorfo', '-', '32', '20', '20'],
        ["Pantheon", '3', '5', 'Dragão', 'Guardião', '-', '56', '80', '20'],
        ["Poppy", '4', '3', 'Yordle', 'Cavaleiro', '-', '25', '40', '20'],
        ["Pyke", '2', '2', 'Pirata', 'Assassino', '-', '36', '25', '20'],
        ["Rek'Sai", '3', '2', 'Vastinata', 'Lutador', '-', '30', '20', '20'],
        ["Rengar", '3', '3', 'Selvagem', 'Assassino', '-', '42', '20', '20'],
        ["Sejuani", '2', '4', 'Glacial', 'Cavaleiro', '-', '24', '40', '20'],
        ["Shen", '4', '2', 'Ninja', 'Mestre das Lâminas', '-', '45', '30', '20'],
        ["Shyvana", '1', '3', 'Dragão', 'Metamorfo', '-', '35', '30', '20'],
        ["Swain", '2', '5', 'Imperial', 'Demônio', 'Metamorfo', '42', '25', '20'],
        ["Tristana", '4', '1', 'Yordle', 'Pistoleiro', '-', '32', '20', '20'],
        ["Twisted Fate", '4', '2', 'Pirata', 'Feticeiro', '-', '28', '20', '20'],
        ["Varus", '3', '2', 'Demônio', 'Patrulheiro', '-', '35', '25', '20'],
        ["Vayne", '3', '1', 'Nobre', 'Patrulheiro', '-', '28', '25', '20'],
        ["Veigar", '3', '3', 'Yordle', 'Feticeiro', '-', '27', '20', '20'],
        ["Vi", '3', '3', 'Hextec', 'Lutador', '-', '39', '25', '20'],
        ["Volibear", '2', '3', 'Glacial', 'Lutador', '-', '42', '30', '20'],
        ["Warwick", '4', '1', 'Selvagem', 'Lutador', '-', '30', '30', '20'],
        ["Yasuo", '2', '5', 'Exilado', 'Mestre das Lâminas', '-', '75', '35', '20'],
        ["Zed", '3', '2', 'Ninja', 'Assassino', '-', '45', '25', '20'],
    ]
    }
  }
 
  render() {

    return (
        
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={this.state.tableHead} widthArr={this.state.widthArr} style={styles.header} textStyle={styles.text}/>
            <ScrollView style={styles.dataWrapper}>
            <TableWrapper style={styles.wrapper}>
              <Rows data={this.state.tableData} flexArr={this.state.widthArr} style={styles.row} textStyle={styles.text}/>
              </TableWrapper>
            </ScrollView>
            </Table>
          </View>
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  header: { height: 50, backgroundColor: '#537791' },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' },
  wrapper: { flexDirection: 'row' },
});
