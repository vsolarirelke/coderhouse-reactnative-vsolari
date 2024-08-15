import { Image, Pressable, StyleSheet, Text, View ,SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import products from '../data/products.json'
import { titles, texts } from '../global/texts'
import { colors } from '../global/colors'
import Stars from '../components/Stars'

const ItemDetail = ({id}) => {

  const product = products[id] 

  return (
    <SafeAreaView style={styles.container}>
      <Header title={titles.product_detail} /> 
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
          <Text style={styles.name}>Super Soft T-Shirt</Text>
          <Text style={styles.price}>{texts.currency_symbol} {product.price}</Text>
          <Text style={styles.description}>
            {product.description}
          </Text>
        </View>
        <Stars/>
        
        <View style={styles.separator}></View>
        <View style={styles.addToCarContainer}>
          <TouchableOpacity style={styles.shareButton} onPress={() => clickEventListener()}>
            <Text style={styles.shareButtonText}> Agregar al carro</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    productImg: {
      width: 200,
      height: 200,
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
      //backgroundColor: '#00BFFF',
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