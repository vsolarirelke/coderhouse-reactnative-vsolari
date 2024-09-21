import { Pressable, StyleSheet, Text, View,StatusBar,Platform } from 'react-native'
import { colors } from '../global/colors'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { deleteSession } from '../db'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from '../features/auth/authSlice'

const Header = ({title}) => {

  const dispatch = useDispatch()
  const idToken = useSelector(state => state.auth.idToken)

  const onLogout = () =>{
    deleteSession()
    dispatch(clearUser())
  }

  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <AntDesign name="apple1" size={28} color="black" />
        <Text style={styles.text}>{title}</Text>
      </View>
      {idToken && (
        <Pressable onPress={onLogout} style={styles.logout}>
          <MaterialIcons name="logout" size={20} color="black" />
        </Pressable>
      )}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  
  container: {
    //marginTop:Platform.OS === "android" ? StatusBar.currentHeight:30,
    flexDirection: 'row', // Alinea los elementos en una fila
    alignItems: 'center', // Centra los elementos verticalmente
    justifyContent: 'space-between', // Separa los elementos hacia los extremos
    paddingLeft: 10,
    paddingRight: 10, 
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight:30,
    marginTop: 0,
    height:80,
    backgroundColor: colors.white,
  },
  centerContent: {
    flexDirection: 'row', // Alinea el icono y el texto en una fila
    alignItems: 'center', // Centra verticalmente el icono y el texto
    justifyContent: 'center', // Centra el contenido horizontalmente dentro de su contenedor
    flex: 1, // Ocupa todo el espacio disponible entre el inicio y el botón
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.black,
    marginLeft: 10,
    paddingTop: 5,
  },
  logout: {
    padding: 5,
  },

})