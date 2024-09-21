import { StyleSheet, Text, View,Image,FlatList } from 'react-native'
import React, { useEffect } from 'react'
import SubmitButton from '../components/SubmitButton'
import { useGetUserQuery } from '../services/users'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../components/LoadingSpinner'
import { colors } from '../global/colors'

const MyProfile = ({navigation}) => {
  const localId = useSelector(state => state.auth.localId)
  const email    = useSelector(state => state.auth.email)

  const {data:user,isSuccess,isLoading,isError,error} = useGetUserQuery({localId})
  
  useEffect(()=>{
    if(isSuccess) console.log(user)
    if(isError) console.log(error)
  },[isSuccess,isError])

  if(isLoading) return <LoadingSpinner/>
  return (
    <View style={styles.container}>
      <Image
        source={user.image ? 
                {uri:user.image}
                :
                require("../../assets/profile_default.png")}
        resizeMode='cover'
        style={styles.image}
      />
      <Text>{email}</Text>
      <SubmitButton title="Agregar imagen de perfil" onPress={()=>navigation.navigate("ImageSelector")}/>
    </View>
  )
}

export default MyProfile

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