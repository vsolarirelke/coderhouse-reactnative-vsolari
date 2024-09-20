import { StyleSheet, Text, View,FlatList, Pressable } from 'react-native'

import CartItem from '../components/CartItem'
import { colors } from '../global/colors'
import { useDispatch, useSelector } from 'react-redux'
import { usePostOrderMutation } from '../services/orders'
import { clearCart } from '../features/cart/cartSlice'
import CenterMessage from '../components/CenterMessage'

const Cart = ({navigation}) => {

  
  const cart = useSelector(state => state.cart)
  const localId = useSelector(state => state.auth.localId)
  const [triggerPostOrder] = usePostOrderMutation()
  const dispatch = useDispatch()

  //Funn Agregar Orden
  const handleAddOrder = () => {
    const createdAt = new Date().toLocaleString()
    const order = {
      ...cart,
      createdAt
    }
    triggerPostOrder({localId,order})
    dispatch(clearCart())
    navigation.navigate("OrdersStack")

  }

  if(cart.total === 0) return <CenterMessage label={"No existen productos en su carro" } labelRedirect={"Buscar en Tienda"} navigateName={"HomeStack"}/>
  
  return (
    <View style={styles.container}>
      <FlatList
      data={cart.items}
      keyExtractor={item => item.id}
      renderItem={({item})=> <CartItem item={item}/> }
      />
      <View style={styles.containerConfirm}>
        <Pressable onPress={handleAddOrder} style={styles.button}>
          <Text style={styles.textConfirm}>Confirmar</Text>
          </Pressable>
        <Text style={styles.textAmount}>Total: $ {cart.total}</Text>
      </View>
    </View>
  )
  
}

export default Cart

const styles = StyleSheet.create({
    container:{
        justifyContent:"space-between",
        flex:1,
        backgroundColor: colors.white
    },
    containerConfirm:{
        backgroundColor:colors.black,
        paddingTop: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        flexDirection:"row",
        justifyContent:"space-between",

    },
    textAmount:{
        color:"white",
        fontSize:20,
        paddingTop: 10,
        paddingRight: 10
    },
    textConfirm:{
      color:"white",
      fontSize:20,
    },
    button: {
      backgroundColor: colors.info, // Color de fondo del botón
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20
    },
})

