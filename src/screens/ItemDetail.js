import { Image, StyleSheet, Text, View , ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { texts } from '../global/texts'
import { colors } from '../global/colors'
import Stars from '../components/Stars'
import { addItemCart } from '../features/cart/cartSlice'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { useGetProductByIdQuery } from '../services/shop'
import LoadingSpinner from '../components/LoadingSpinner'
import Counter from '../components/Counter'

const ItemDetail = ({route}) => {

  const {productId} = route.params
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const count = useSelector((state)=> state.counter.value)
  const {data:product,isSuccess,isLoading,isError,error} = useGetProductByIdQuery(productId)
  
  const handleAddItemCart = () => {
    dispatch(addItemCart({...product, quantity: count}))
    navigation.navigate("CartStack")
  }

  if(isLoading) return <LoadingSpinner/>
  if(isError) return <View><Text>{error.message}</Text></View>

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
            <Image
              style={styles.productImg}
              resizeMode='contain'
              source={{
                uri: product.thumbnail,
              }}
            />
            <Text style={styles.name}>{product.title}</Text>
            <Text style={styles.price}>{texts.currency_symbol} {product.price}</Text>
            <Text style={styles.description}>
              {product.description}
            </Text>
          </View>
          <Stars/>
          <Counter/>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={handleAddItemCart}>
              <Text style={styles.shareButtonText}> Agregar al carro</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      backgroundColor: "white"

    },
    productImg: {
      width: 150,
      height: 150,
    },
    name: {
        marginTop:10,
      fontSize: 22,
      color: colors.black, 
      fontWeight: 'bold',
    },
    price: {
      marginTop: 10,
      fontSize: 20,
      color: colors.black,
      fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
      textAlign: 'center',
      marginTop: 10,
      color: '#696969',
    },
    
    
    separator: {
      height: 2,
      backgroundColor: '#eeeeee',
      marginTop: 20,
      marginHorizontal: 30,
    },
    shareButton: {
      marginTop: 10,
      height: 45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
      backgroundColor: colors.info
    },
    shareButtonText: {
      color: '#FFFFFF',
      fontSize: 20,
    },
    addToCarContainer: {
      marginHorizontal: 30,
    },
  })