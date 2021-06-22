import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {KeyboardAvoidingView ,TextInput ,ImageBackground, StyleSheet, Text, View, Platform, TouchableOpacity, Keyboard } from 'react-native';
import Reunion from './components/Reunion';
import { FontAwesome } from '@expo/vector-icons'; // 5.0.0


const bg = { uri: "https://telegra.ph/file/a5f51da3ea8d2f61c9366.png" };

// TODO: VUE SUR REUNION
export default function App() {
    const[reu, setReu] = useState();
    const[reuItems, setReuItems] = useState([]);

    const handleAddReu = () => {
        Keyboard.dismiss();
        setReuItems([...reuItems, reu])
        setReu(null);
    }

    const completeReu = (index) => {
        let itemsCopy = [...reuItems];
        itemsCopy.splice(index, 1);
        setReuItems(itemsCopy);
    }


  return (
    <View style={styles.container}>

        {/* TODO: Background */}
    <ImageBackground
        source={bg}
        style={{width: '100%', height: '100%'}}>
        <StatusBar barStyle="light-content" />

    {/*  */}
    {/* TODO: item*/}
        <View style={styles.reuWrapper}>
            <View style={styles.title}>
            <Text style={styles.sectionTitle}>MAREU</Text>
            <TouchableOpacity>
                <Text style={{fontSize: 21, color:'#29535C'}}>filtre &nbsp;
                <FontAwesome style={styles.icon} name="filter" size={21} color="#29535C" />
                </Text>
            </TouchableOpacity>
            </View>

            <View style={styles.items}>
                {
                    reuItems.map((item, index) => {
                        return  (
                        <TouchableOpacity style={styles.suppr} key={index} onPress={() => completeReu()}>
                            <Reunion text={item}/>
                        </TouchableOpacity>
                            )
                    })
                }
            </View>
        </View>


    {/* TODO: programmer une reunion */}
        <KeyboardAvoidingView
            behavior={Platform.OS === "android"?"padding":"height"}
            style={styles.writeReu}>
            <TextInput
            style={styles.input}
            placeholder={'Nouvelle reunion'}
            value={reu}
            onChangeText={text=> setReu(text)}>
            </TextInput>

            <TouchableOpacity onPress={() => handleAddReu()}>
                <View style={styles.ajouter}>
                    <FontAwesome style={styles.icon} name="plus" size={21} color="#29535C" />
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    </ImageBackground>
</View>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    reuWrapper: {
        paddingTop: 45,
        paddingHorizontal: 11,
    },
    title:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal:27,
        justifyContent: 'space-between',
    },
    sectionTitle: {
        fontSize: 33,
        fontWeight: 'bold',
        paddingVertical: 21,
        color:'#29535C',
    },
    items: {
        marginTop: 7,
    },
    writeReu:{
        position:'absolute',
        bottom:33,
        width: '100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    input:{
        opacity: .83,
        marginLeft:11,
        padding:15,
        backgroundColor:'#FFF',
        borderRadius: 50,
        width:270,
        height:50,
        color:'#29535C',
        // shadow
        shadowColor: "#C93780",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.19,
        shadowRadius: 4.65,
        elevation: 3,
    },
    ajouter:{
        opacity: .9,
        marginRight:11,
        padding:15,
        backgroundColor:'#FFF',
        borderRadius: 50,
        width:50,
        height:50,
        color:'#29535C',
        // shadow
        shadowColor: "#C93780",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.19,
        shadowRadius: 4.65,
        elevation: 3,
        alignItems:'center'
    },
    plus:{

    },
});
