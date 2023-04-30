import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View, StyleSheet, Image, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Latihan = () => {
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', margin:10}}>
            <StatusBar hidden={true}/>
            {student()}
            <View style={{flex: 1, backgroundColor: "red", justifyContent: 'center', alignItems: 'center'}}>
                <View></View>
                <Image source={require("./bear.png")} style={{width: 100, height:100, position: 'absolute'}} />   
                <View>
                    <Text style={{fontSize:30, fontWeight:'bold', color:"yellow"}}>Yaaaaaaaaaaaaaaaaaa</Text>
                </View>
            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default Latihan;

const Mahasiswa={
    nama : "Anjayani",
    npm : 21234144,
    tl : 21-42-4202
}

function student () {
    return (
        <View style ={{backgroundColor: "rgb(0,0,232)", justifyContent: 'center', alignItems : 'center', marginBottom:10}} >
            <View style={styles.anjay}>
            </View>
            <Text>Latihan</Text>
            <Text style = {{color:"blue"}}> Mahasiswa: {Mahasiswa.nama}</Text>
            <Text style = {{fontWeight:"bold"}}> Mahasiswa: {Mahasiswa.npm}</Text>
            <Text style = {{fontStyle:"italic"}}> Mahasiswa: {Mahasiswa.tl}</Text>
        </View>
    )
}





