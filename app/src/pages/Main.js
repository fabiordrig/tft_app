import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image, FlatList} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {listaCampeoes} from '../data/ListaCampeoes';

import ScrollItems from '../scroll_items/ItemsScroll';

import ScrollCampeoes from '../scroll_campeoes/CampeoesScroll';


export default function Main({navigation}){

    //Serve para pegar os dados que o usuario colocar na tela de Login
    const email = navigation.getParam('email');
    async function logOut(){
        //Limpar o cache do Login
        await AsyncStorage.clear();
        navigation.navigate('Login');
    }

    //Funcao para demostrar atributos dos campeoes
    class HorizontalFlatListCampeao extends Component{
        render(){
            return (
                <TouchableOpacity onPress={() => {
                alert("Nome: " + this.props.item.name
                + "\nCusto: " + this.props.item.custo
                + "\nClasses: " + this.props.item.classe1 + ", " + this.props.item.classe2
                );}}>
                    <Image style={styles.imagemCanpeoes} source={this.props.item.image}/>
                </TouchableOpacity>
            );
        }
    }

    //Funcao para demostrar atributos dos itens
    class HorizontalFlatListItems extends Component{
        render(){
            return (
                <TouchableOpacity onPress={() => {
                alert("Nome: " + this.props.item.name);}}>
                    <Image style={styles.imagemItems} source={this.props.item.image}/>
                </TouchableOpacity>
            );
        }
    }

    return (
        <View style={styles.container}>
            {/* Lista de Campeoes*/}
            <Text>Campeões</Text>
            {/* Lista de Campeoes
            <View style={styles.listaCampeoes}>
                <FlatList horizontal={true}
                data={listaCampeoes}
                renderItem={({item, index}) => {
                    return(
                        <HorizontalFlatListCampeao item={item} index={index} parentFlatList={this}>
                        </HorizontalFlatListCampeao>
                    );
                }}
                keyExtractor={(item, index) => item.name}>
                </FlatList>
            </View>*/}
            <ScrollCampeoes />
            </View>

            {/* Lista de Items*/}
            <ScrollItems />

            {/* Sair - Log Out*/}
            <TouchableOpacity onPress={logOut} style={styles.logout}>
                <Text>LogOut</Text>
            </TouchableOpacity>
        </View>);
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'grey',
        justifyContent:'space-between',
        alignItems: 'center'
    },

    listaCampeoes:{
        flex:1,
        alignItems:'center',
    },
    imagemCanpeoes:{
        flex:1,
        resizeMode:'stretch',
        width:150
    },

    logout:{
        flex:1,
        backgroundColor:'grey',
        justifyContent:'center',
    },
});