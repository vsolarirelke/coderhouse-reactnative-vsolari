import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors'

import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

import { placeholders } from '../global/texts'


const Search = ({onSearch}) => {

   
  return (
    <View style={styles.container}>
        <View style={styles.containerInput}>
            <TextInput
                style={styles.input}
                placeholder={placeholders.search}
                underlineColorAndroid="transparent"
            />
            <View style={styles.buttonContainer}>
                <Pressable >
                    <EvilIcons name="search" size={32} color="black" />
                </Pressable>
                <Pressable>
                    <EvilIcons name="trash" size={32} color="black" />
                </Pressable>
            </View>  
        </View>
        <View style={styles.containerError}><Ionicons name="bug-outline" size={15} color="black" /><Text style={styles.error}>{"Hola soy un error"}</Text></View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container:{
        margin:10,
        marginTop:10
    },
    containerInput:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        //justifyContent: "space-around",
        alignItems:"center"
    },
    input:{
        width:"75%",             //Ancho
        height: 35,              //Alto  
        borderRadius: 10,        // Bordes redondeados
        paddingHorizontal: 10,   // Espaciado interno
        backgroundColor: colors.white, // Fondo blanco
        shadowColor: colors.black,     // Color de la sombra
        shadowOffset: { width: 0, height: 2 }, // Offset de la sombra
        shadowOpacity: 0.25,     // Opacidad de la sombra
        shadowRadius: 3.84,      // Radio de la sombra
        elevation: 5,            // Elevación para sombra en Android
    },
    buttonContainer:{
        flexDirection:"row"
    },
    containerError:{
        flexDirection: "row",
        marginLeft:20,
        paddingTop: 10,
        alignItems: 'center'
    },
    error:{
        color: colors.info,
        fontWeight:"400",
        paddingLeft: 10
        // marginLeft:20,
        // paddingTop: 10
    }
})