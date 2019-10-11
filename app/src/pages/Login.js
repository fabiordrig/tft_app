import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity} from 'react-native';



export default function Login({navigation}){
    const [user, setUser] = useState('');

    // Salvar o Login da pessoa para ao fechar ja entrar na pagina principal
    useEffect(() => {
        AsyncStorage.getItem('email').then(user =>{
            if(user){
            navigation.navigate('Main', {user});
            }
        })
    }, [])

    
    async function Logar(){
        console.log(user);
        await AsyncStorage.setItem('email', user)
        navigation.navigate('Main', user);
    }

    return (
    <View style={styles.container}>
        <Text >
                TFT
        </Text>

        <TextInput style={styles.input} 
        placeholder="Email"
        placeholderTextColor="#999" 
        value={user}
        onChangeText={setUser}/>

        <TextInput style={styles.input} 
        placeholder="Senha"
        placeholderTextColor="#999" />
        
        <TouchableOpacity onPress={Logar}
             style={styles.buttonEntrar} >
            <Text style={styles.textoEntrar}>
                Entrar
            </Text>
        </TouchableOpacity>
    </View>);
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5',
        justifyContent:'center',
        alignItems: 'center',
        padding:30
    },
    input:{
        height:46,
        alignSelf:'stretch',
        borderWidth:1,
        backgroundColor:'#FFF',
        borderColor:'#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
    },
    buttonEntrar:{
        height:46,
        alignSelf:'stretch',
        backgroundColor:'#DF4723',
        borderRadius: 4,
        marginTop: 10,
        justifyContent:'center',
        alignItems: 'center',
    },
    textoEntrar:{
        color:'#FFF',
        fontWeight:'bold',
        fontSize:16,
    },
});