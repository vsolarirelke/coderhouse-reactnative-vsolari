import { StyleSheet, Text, View, Pressable } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from '../global/colors';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const OrderItem = ({item}) => {

  const navigation = useNavigation()

  return (
    <Pressable onPress={()=>navigation.navigate("OrderDetail",{id:item.id})}>
      <View style={styles.productCard}>
        <FontAwesome5 name="receipt" size={30} color="black" />
        <View style={styles.productInfo}>
          <Text style={styles.productDate}>Fecha: {item.createdAt}</Text>
          <Text style={styles.productTotal}>Total: ${item.total} </Text>
        </View>
        <View style={styles.productAmount}>
          <AntDesign name="search1" size={30} color="black" />
        </View>
      </View>
    </Pressable>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    
    productCard: {
      width:"90%",
      marginHorizontal:"5%",
      backgroundColor:colors.white,
      
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 4,
      padding: 16,
      marginBottom: 15,
      marginTop: 15
    },
    
    productInfo: {
      flex: 1,
      marginRight: 16,
      marginLeft: 20,
    },
    productDate: {
      fontSize: 16,
    },
    productTotal:{
      fontWeight: 'bold',
      color: colors.black,
      fontSize: 16,
    },
})