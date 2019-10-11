import React, { Component } from 'react';

import { View, ImageBackground, StyleSheet, Text, Image } from 'react-native';

// import { Container } from './styles';

export default class ItemList extends React.Component {
  render() {
    return (
        <View style={styles.box}>
            <Image
                source={this.props.itemsImage}
                style={styles.classe} />
        </View>
        );
    }
}


const styles = StyleSheet.create({
    box: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    moldura:{
        flex: 1,
        width: 50,
        height: 50,
        alignContent: 'center',
        
    },
    classe: {
        width: 320,
        height: 300,
        alignSelf: 'center'
    }

})