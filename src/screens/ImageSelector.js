import { StyleSheet, View,Image } from 'react-native'
import SubmitButton from '../components/SubmitButton'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import { usePatchImageProfileMutation } from '../services/users'
import { useSelector } from 'react-redux'
import { colors } from '../global/colors'

const ImageSelector = ({navigation}) => {

    const [image,setImage] = useState("")
    const [triggerAddImageProfile] = usePatchImageProfileMutation()
    const localId = useSelector(state => state.auth.localId)


    const pickImage = async () => {

       const {granted} = await ImagePicker.requestCameraPermissionsAsync()
       if(!granted) return 

       const result = await ImagePicker.launchCameraAsync({
        aspect:[9,9],
        quality:0.2,
        base64:true,
        allowsEditing:true
       })

       if(result.canceled) return

       setImage("data:image/jpg;base64," + result.assets[0].base64)

    }
    const confirmImage = () => {
        triggerAddImageProfile({image,localId})
        navigation.navigate("MyProfile")
    }
  return (
    <View style={styles.container}>
      <Image
        source={image ? {uri:image}:require("../../assets/profile_default.png")}
        resizeMode='cover'
        style={styles.image}
      />
      <SubmitButton title="Tomar Imagen" onPress={pickImage}/>
      <SubmitButton title="Confirmar" onPress={confirmImage}/>
    </View>
  )
}

export default ImageSelector

const styles = StyleSheet.create({
    container:{
        paddingTop:70,
        alignItems:"center",
        gap:20,
        backgroundColor: colors.white,
        height: "100%"
    },
    image:{
        width:120,
        height:120,
        borderRadius:60,
    }
})