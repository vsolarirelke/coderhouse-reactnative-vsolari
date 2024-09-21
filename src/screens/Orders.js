import { StyleSheet, View, FlatList } from 'react-native'
import OrderItem from '../components/OrderItem'
import {  useGetOrdersByUserQuery } from '../services/orders'
import LoadingSpinner from '../components/LoadingSpinner'
import { useSelector } from 'react-redux'
import CenterMessage from '../components/CenterMessage'

const Orders = () => {

  const localId = useSelector(state => state.auth.localId)
  const {data:orders,isLoading} = useGetOrdersByUserQuery(localId)
  
  if(isLoading) return <LoadingSpinner/>

  if(orders.length === 0) return <CenterMessage label={"No existen ordenes en su cuenta" } labelRedirect={"Comprar en Tienda"} navigateName={"HomeStack"}/>

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=> <OrderItem item={item}/>}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
    backgroundColor: "white"
  }
})