import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image, FlatList, ImageBackground, Button, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {listaCampeoes} from '../data/ListaCampeoes';

import ScrollItems from '../scroll_items/ItemsScroll';
import ScrollCampeoes from '../scroll_campeoes/CampeoesScroll';
import Classes from '../data/Classes';
import { ScrollView } from 'react-native-gesture-handler';


export default function Main({navigation}){

    //Serve para pegar os dados que o usuario colocar na tela de Login
    const email = navigation.getParam('email');
    async function logOut(){
        //Limpar o cache do Login
        await AsyncStorage.clear();
        navigation.navigate('Login');
    }

    //Funcao para demostrar atributos dos campeoes
    /*
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
    */
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.header}>SIMULADOR (WIP)</Text>
            </View>
            <View>
                <Button
                title="Vitória"
                onPress={() => Alert.alert('Vitória')}
                />
                <Button
                title="Derrota"
                onPress={() => Alert.alert('Derrota')}
                color="red"
                />
            </View>
            <View style={styles.tableContainer}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Assassin.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Silver.png')} classeImage={require('../assets/Classes/S-Assassin.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Assassin.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Blademaster.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Silver.png')} classeImage={require('../assets/Classes/S-Blademaster.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Blademaster.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Brawler.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Silver.png')} classeImage={require('../assets/Classes/S-Brawler.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Brawler.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Demon.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Silver.png')} classeImage={require('../assets/Classes/S-Demon.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Demon.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Dragon.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Dragon.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Dragon.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Elementalist.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Elementalist.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Elementalist.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Exile.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Exile.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Exile.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Glacial.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Silver.png')} classeImage={require('../assets/Classes/S-Glacial.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Glacial.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Guardian.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Guardian.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Guardian.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-GunSlinger.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Silver.png')} classeImage={require('../assets/Classes/S-GunSlinger.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-GunSlinger.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-HexTech.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-HexTech.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-HexTech.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Imperial.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Imperial.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Imperial.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Knight.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Silver.png')} classeImage={require('../assets/Classes/S-Knight.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Knight.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Ninja.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Ninja.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Ninja.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Nobles.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Nobles.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Nobles.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Phantom.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Phantom.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Phantom.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Pirates.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Pirates.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Pirates.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Ranger.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Ranger.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Ranger.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Robot.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Robot.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Robot.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-ShapeShifter.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-ShapeShifter.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-ShapeShifter.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Sorc.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Silver.png')} classeImage={require('../assets/Classes/S-Sorc.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Sorc.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Void.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Void.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Void.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Wild.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Wild.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Wild.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Yordle.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Yordle.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Yordle.png')} />
                        </View>
                    </View>
                </ScrollView>

                <ScrollView style={styles.scrollView}>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Assassin.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Silver.png')} classeImage={require('../assets/Classes/S-Assassin.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Assassin.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Blademaster.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Silver.png')} classeImage={require('../assets/Classes/S-Blademaster.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Blademaster.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Brawler.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Silver.png')} classeImage={require('../assets/Classes/S-Brawler.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Brawler.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Demon.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Silver.png')} classeImage={require('../assets/Classes/S-Demon.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Demon.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Dragon.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Dragon.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Dragon.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Elementalist.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Elementalist.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Elementalist.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Exile.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Exile.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Exile.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Glacial.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Silver.png')} classeImage={require('../assets/Classes/S-Glacial.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Glacial.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Guardian.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Guardian.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Guardian.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-GunSlinger.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Silver.png')} classeImage={require('../assets/Classes/S-GunSlinger.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-GunSlinger.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-HexTech.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-HexTech.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-HexTech.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Imperial.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Imperial.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Imperial.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Knight.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Silver.png')} classeImage={require('../assets/Classes/S-Knight.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Knight.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Ninja.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Ninja.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Ninja.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Nobles.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Nobles.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Nobles.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Phantom.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Phantom.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Phantom.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Pirates.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Pirates.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Pirates.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Ranger.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Ranger.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Ranger.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Robot.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Robot.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Robot.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-ShapeShifter.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-ShapeShifter.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-ShapeShifter.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Sorc.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Silver.png')} classeImage={require('../assets/Classes/S-Sorc.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Sorc.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Void.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Void.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Void.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Wild.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Wild.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Wild.png')} />
                        </View>
                    </View>
                    <View style={styles.listContainer}>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Bronze.png')} classeImage={require('../assets/Classes/S-Yordle.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Yordle.png')} />
                        </View>
                        <View style={styles.menuContainer}>
                            <Classes molduraImage={require('../assets/Moldura/Gold.png')} classeImage={require('../assets/Classes/S-Yordle.png')} />
                        </View>
                        
                    </View>
                </ScrollView>
            </View>
        </View>
        
        );
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
    top: {
        height: '25%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: '#fff',
        fontSize: 28,
        borderColor: '#fff',
        borderWidth: 2,
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40
    },
    menuContainer: {
        height: 50,
        width: 50,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    listContainer: {
        height: '15%',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    scrollView: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderColor: '#fff',
        borderWidth: 2,
      },
    tableContainer: {
        flex:1,
        flexDirection: 'row',
    }
});