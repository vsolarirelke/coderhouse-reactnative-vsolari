import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { colors } from '../global/colors'
import { removeCartItem } from '../features/cart/cartSlice'

const CartItem = ({item}) => {

  const dispatch = useDispatch();
  const handleRemoveItem = (itemId) => {
    dispatch(removeCartItem(itemId));
  };

  return (
    // <View style={styles.container}>
    //   <View style={styles.containerText}>
    //     <Text style={styles.title}>{item.title}</Text>
    //     <Text style={styles.brand}>{item.brand}</Text>
    //     <Text style={styles.price}>{item.price} $</Text>
    //   </View>
    //   <Entypo name="trash" size={48} color="black" />
    // </View>
      <View style={styles.productCard}>
        <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.title}</Text>
          <Text style={styles.productQuantity}>Cantidad: {item.quantity}</Text>
          <Text style={styles.productPrice}>Precio: ${item.price}</Text>
          <Text style={styles.productTotal}>Total: ${item.price*item.quantity} </Text>
        </View>
        <View style={styles.productAmount}>
          <EvilIcons name="trash" size={35} color="black" onPress={() => handleRemoveItem(item.id)} />
        </View>
      </View>

  )
}

export default CartItem

// const styles = StyleSheet.create({
//     container:{
//         width:"90%",
//         marginHorizontal:"5%",
//         backgroundColor:colors.green2,
//         marginVertical:10,
//         padding:20,
//         flexDirection:"row",
//         alignItems:"center",
//         justifyContent:"space-between",
//         borderRadius:3
//     },
//     containerText:{
//         width:"70%",
//         gap:5
//     },
//     title:{
//         color:"white",
//         fontSize:20
//     },
//     brand:{
//         color:"white",
//         fontSize:16
//     },
//     price:{
//         color:"white",
//         fontSize:16,
//         fontWeight:"bold"
//     }
// })
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#f7f7f7',
  //   paddingTop:40,
  // },
  // productList: {
  //   flex: 1,
  //   paddingTop: 16,
  // },
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
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 16,
  },
  productInfo: {
    flex: 1,
    marginRight: 16,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
  },
  productTotal:{
    fontWeight: 'bold',
    color: colors.black,
  },
  productPriceText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#666',
  },
  productAmount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amountButton: {
    width: 30,
    height: 30,
    backgroundColor: '#ffa726',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amountButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  continueButton: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: '#4caf50',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});