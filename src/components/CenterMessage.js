import { StyleSheet, Text, View,TextInput , Pressable } from 'react-native'
import { colors } from '../global/colors'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';

const CenterMessage = ({label, labelRedirect, navigateName}) => {
    
    const navigation = useNavigation()

    return (
        // <View style={styles.inputContainer}>
        //     <EvilIcons name="search" size={24} color="black" />
        //     <View><Text>{label}</Text></View>
        //     <Pressable onPress={()=> navigation.navigate(navigateName)} >
        //         <Text style={styles.subLink}>{labelRedirect}</Text>
        //     </Pressable>
        // </View>
        <View style={styles.container}>
            <View style={styles.inputContainer}>
            <EvilIcons name="search" size={50} color="black" />
            <View style={styles.messageContainer}>
                <Text style={styles.messageText}>{label}</Text>
            </View>
            <Pressable onPress={() => navigation.navigate(navigateName)} style={styles.button}>
                <Text style={styles.buttonText}>{labelRedirect}</Text>
            </Pressable>
            </View>
        </View>
    )
}

export default CenterMessage

const styles = StyleSheet.create({
    // inputContainer:{
    //     width:"100%"
    // },
    // input:{
    //     width:"90%",
    //     borderWidth:0,
    //     borderBottomWidth:3,
    //     borderBottomColor:"white",
    //     padding:2,
    //     fontSize:14,
    //     marginHorizontal:"5%",
    //     marginVertical:10,
    //     color: colors.white
    //   },
    //   titleInput:{
    //     width:"90%",
    //     marginHorizontal:"5%",
    //     fontSize:16,
    //     color: colors.white
    //   },
    //   error:{
    //     fontSize:16,
    //     color:"red",
    //     marginLeft:20
    //   }
    container: {
        flex: 1, // Ocupa todo el espacio disponible
        justifyContent: 'center', // Centra verticalmente
        alignItems: 'center', // Centra horizontalmente
        backgroundColor: colors.white, // Fondo claro para mejor visualización
      },
      inputContainer: {
        alignItems: 'center', // Centra los elementos dentro de este contenedor
      },
      messageContainer: {
        marginVertical: 20, // Espacio entre el mensaje y otros elementos
      },
      messageText: {
        fontSize: 18,
        color: '#333',
        textAlign: 'center', // Centra el texto dentro de su contenedor
      },
      button: {
        backgroundColor: colors.info, // Color de fondo del botón
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 10, // Espacio entre el texto y el botón
        borderRadius: 20
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
      },
})