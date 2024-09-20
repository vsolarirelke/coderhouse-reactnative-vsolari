import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useGetOrderByUserQuery } from '../services/orders'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import LoadingSpinner from '../components/LoadingSpinner'

const OrderDetail = ({route}) => {

    const {id} = route.params
    const localId = useSelector(state => state.auth.localId)
    const email   = useSelector(state => state.auth.email)
    const {data:order, isSuccess, isLoading} = useGetOrderByUserQuery({localId,orderId:id})

    useEffect(()=>{
        if(isSuccess) console.log(order)
    },[isSuccess])

    if(isLoading) return <LoadingSpinner/>

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}><FontAwesome5 name="receipt" size={30} color="black" /> Orden</Text>
      <Text style={styles.date}>Fecha: {order.createdAt.split(', ')[0]}</Text>
      <Text style={styles.date}>Hora: {order.createdAt.split(', ')[1]}</Text>
      <Text style={styles.date}>No.: {id}</Text>
      <View style={styles.info}>
        <Text style={styles.infoText}>Cliente: {email}</Text>
      </View>
      <View style={styles.divider} />

      
      {order.items.map(item => (
        <View key={item.id} style={styles.itemRow}>
          <Text style={styles.itemText}>{item.title}</Text>
          <Text style={styles.itemText}>{item.quantity} x ${item.price}</Text>
        </View>
      ))}
      
      <View style={styles.divider} />
      <View style={styles.totalRow}>
        <Text style={styles.totalText}>Total</Text>
         <Text style={styles.totalText}>$ {order.total}</Text>
      </View>
    </ScrollView>
  )
}

export default OrderDetail

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  date: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  info: {
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 5,
  },
  divider: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  itemText: {
    fontSize: 18,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  totalText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },

})