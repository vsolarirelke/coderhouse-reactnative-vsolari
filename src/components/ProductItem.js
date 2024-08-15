import { Image, View, Pressable, TouchableOpacity,  StyleSheet, Text, useWindowDimensions, ScrollView} from 'react-native'
import { colors } from '../global/colors'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React, { useState, useEffect } from 'react';
import { texts } from '../global/texts';
import Stars from '../components/Stars'

const ProductItem = ({product,handleProductDetailId}) => {

  const {width, height} = useWindowDimensions()
  


  return (
    
    <Pressable style={styles.container} onPress={()=>handleProductDetailId(product.id)} key={product.id}>
    
        <View style={{ alignItems: 'center', marginHorizontal: 30 }}>
          <Image
            style={styles.productImg}
            source={{
                uri: product.thumbnail
            }}
          />
          <Text style={styles.name}>{product.title}</Text>
          <Text style={styles.price}>{texts.currency_symbol} {product.price}</Text>         
           <Stars />
          <TouchableOpacity style={styles.shareButton} onPress={()=>handleProductDetailId(product.id)}>
                <Text style={styles.shareButtonText}>Comprar</Text>
          </TouchableOpacity>
        </View>
        
   </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowColor: colors.black,
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 20
        
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
      
      iconContainer: {
        justifyContent: 'center',
    alignItems: 'center',
      },
      star: {
        width: 40,
        height: 40,
      },
      shareButton: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: colors.black,
        width: "100%"
      },
      shareButtonText: {
        color: colors.white,
        fontSize: 20,
      }
     
})