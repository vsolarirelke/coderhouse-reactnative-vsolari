import { StyleSheet, ActivityIndicator, View, Text } from 'react-native'
import { colors } from '../global/colors'

const LoadingSpinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={80} color="black"/>
      <Text>Cargando...</Text>
    </View>
  )
}

export default LoadingSpinner

const styles = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        paddingTop: "20%",
        backgroundColor: colors.white,
        height: "100%"

    }
})