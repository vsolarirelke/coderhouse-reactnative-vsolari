import { StyleSheet, Text, View,TextInput } from 'react-native'
import { colors } from '../global/colors'

const InputForm = ({label,value,onChangeText,isSecure,error}) => {
  return (
    <View style={styles.inputContainer}>
        <Text style={styles.titleInput}>{label}</Text>
        <TextInput  
            value={value}  
            onChangeText={onChangeText} 
            style={styles.input}
            secureTextEntry={isSecure}
        />
        <View><Text style={styles.error}>{error ? error : ""} </Text></View>
    </View>
  )
}

export default InputForm

const styles = StyleSheet.create({
    inputContainer:{
        width:"100%"
    },
    input:{
        width:"90%",
        borderWidth:0,
        borderBottomWidth:3,
        borderBottomColor:"white",
        padding:2,
        fontSize:14,
        marginHorizontal:"5%",
        marginVertical:10,
        color: colors.white
      },
      titleInput:{
        width:"90%",
        marginHorizontal:"5%",
        fontSize:16,
        color: colors.white
      },
      error:{
        fontSize:16,
        color:"red",
        marginLeft:20
      }
})