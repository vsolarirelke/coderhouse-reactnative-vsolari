import { StyleSheet, Text, View,Pressable, Image } from 'react-native'
import { colors } from '../global/colors'
import { version } from '../global/version'
import { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useLoginMutation } from '../services/auth'
import { setUser } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import { loginSchema } from '../validations/loginSchema'
import { deleteSession, insertSession } from '../db'


const Login = ({navigation}) => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errorEmail,setErrorEmail] = useState("")
    const [errorPassword,setErrorPassword] = useState("")
    const [triggerLogin,{data,isSuccess,isError,error}] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(()=>{
      if(isError) {
        setErrorEmail("email o contraseña invalida")
        setErrorPassword("email o contraseña invalida")
      }
    },[isError])


    const onSubmit = async () => {
        try {
          loginSchema.validateSync({email,password})
          const {data} = await triggerLogin({email,password})
          deleteSession()
          insertSession(data)
          dispatch(setUser({
            email:data.email,
            idToken:data.idToken,
            localId:data.localId
          }))
        } catch (error) {
          console.log(error)
          switch(error.path){
            case "email":
              setErrorEmail(error.message)
              setErrorPassword("")
              break
            case "password":
              setErrorPassword(error.message)
              setErrorEmail("")
              break
              default:
                break
          }
     
        }
    }

  return (
    <View style={styles.main}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/avatar.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.container}>
            <InputForm
                label="Email"
                value={email}
                onChangeText={(t) => setEmail(t)}
                isSecure={false}
                error={errorEmail}
            />
            <InputForm
                label="Contraseña"
                value={password}
                onChangeText={(t) => setPassword(t)}
                isSecure={true}
                error={errorPassword}
            />
            <SubmitButton onPress={onSubmit} title="Iniciar Sesion" isLogin={true}/>
            <Text style={styles.sub}>¿No tienes una cuenta?</Text>
            <Pressable onPress={()=> navigation.navigate("Register")} >
                <Text style={styles.subLink}>Registrarme</Text>
            </Pressable>
            <Text style={styles.sub}>{version.number}</Text>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
      main:{
        flex:1,
        alignItems:"center",
        paddingBottom: 0,
        marginBottom: 0,
        paddingTop: 20,
        backgroundColor: colors.white
      },
      logoContainer: {
        alignItems: 'center',
        paddingBottom: 20
      },
      logo: {
        width: 120,
        height: 120,
        borderRadius:60,
        resizeMode: 'contain',
        backgroundColor: colors.black,
      },
      container:{
        width:"90%",
        backgroundColor: colors.black,
        gap:15,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:20,
        color: colors.white,
      },
      title:{
        fontSize:22,
      },
      sub:{
        fontSize:14,
        color: colors.white,
      },
      subLink:{
        fontSize:14,
        color: colors.white,
        textDecorationLine: 'underline'
      },
      
})