import React, { Component } from 'react';

import { View, ImageBackground, StyleSheet, Text, Image } from 'react-native';

// import { Container } from './styles';

export default class Classes extends React.Component {
  render() {
    return (
        <View style={styles.box}>
            <ImageBackground
                source={this.props.molduraImage}
                style={styles.moldura}>
                <Image
                    source={this.props.classeImage}
                    style={styles.classe} />
            </ImageBackground>
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
        width: 40,
        height: 45,
        alignSelf: 'center'
    }

})