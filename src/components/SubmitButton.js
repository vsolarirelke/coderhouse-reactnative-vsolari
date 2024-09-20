import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'

const SubmitButton = ({title,onPress, isLogin = false}) => {
  return (
    <Pressable style={isLogin ? styles.buttonLogin : styles.button} onPress={onPress}>
        <Text style={isLogin ? styles.textLogin : styles.text}>{title}</Text>
    </Pressable>
  )
}

export default SubmitButton

const styles = StyleSheet.create({
    buttonLogin:{
        width:"60%",
        backgroundColor:colors.white,
        padding:10,
        alignItems:"center",
        borderRadius:10
    },
    textLogin:{
      textAlign:"center",
      color: colors.black,
      fontSize:18
    },
    button:{
      width:"60%",
      backgroundColor:colors.info,
      padding:10,
      alignItems:"center",
      borderRadius:10
    },
    text:{
        textAlign:"center",
        color: colors.white,
        fontSize:18
    }
})