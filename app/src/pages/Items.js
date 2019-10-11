import React, {Component} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image, FlatList, ImageBackground, Button, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {listaCampeoes} from '../data/ListaCampeoes';

import ScrollItems from '../scroll_items/ItemsScroll';
import ScrollCampeoes from '../scroll_campeoes/CampeoesScroll';
import ItemList from '../data/ItemList';
import { ScrollView } from 'react-native-gesture-handler';

export default function Items(){
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.header}>ITEMS (WIP)</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View  style={styles.menuContainer}>
                    <ItemList itemsImage={require('../assets/Items/ItemsBelt.png')}/>
                </View>
                <View  style={styles.menuContainer}>
                    <ItemList itemsImage={require('../assets/Items/ItemsBF.png')}/>
                </View>
                <View  style={styles.menuContainer}>
                    <ItemList itemsImage={require('../assets/Items/ItemsChain.png')}/>
                </View>
                <View  style={styles.menuContainer}>
                    <ItemList itemsImage={require('../assets/Items/ItemsGlove.png')}/>
                </View>
                <View  style={styles.menuContainer}>
                    <ItemList itemsImage={require('../assets/Items/ItemsNegatron.png')}/>
                </View>
                <View  style={styles.menuContainer}>
                    <ItemList itemsImage={require('../assets/Items/ItemsRecurve.png')}/>
                </View>
                <View  style={styles.menuContainer}>
                    <ItemList itemsImage={require('../assets/Items/ItemsRod.png')}/>
                </View>
                <View  style={styles.menuContainer}>
                    <ItemList itemsImage={require('../assets/Items/ItemsSpatula.png')}/>
                </View>
                <View  style={styles.menuContainer}>
                    <ItemList itemsImage={require('../assets/Items/ItemsTear.png')}/>
                </View>

            </ScrollView>
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
        height: '20%',
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
        height: '60%',
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignSelf: 'center'
    },
    listContainer: {
        height: 50,
        width: 150,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    scrollView: {
        backgroundColor: 'pink',
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
})