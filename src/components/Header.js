import { Pressable, StyleSheet, Text, View,StatusBar,Platform } from 'react-native'
import { colors } from '../global/colors'
import AntDesign from '@expo/vector-icons/AntDesign';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <AntDesign name="apple1" size={28} color="black" /><Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{
    marginTop:Platform.OS === "android" ? StatusBar.currentHeight:0,
    backgroundColor:colors.white,
    width:"100%",
    height:50,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    position:"relative"
  },
  text:{
    fontSize:22,
    fontWeight: "500",
    fontFamily:'Josefin',
    paddingLeft: 10,
    verticalAlign:"Center",
    paddingTop: 10
  }

})