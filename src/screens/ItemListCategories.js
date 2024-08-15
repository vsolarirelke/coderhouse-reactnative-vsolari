import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, SafeAreaView, Text} from 'react-native'

import Header from '../components/Header'
import Search from '../components/Search'
import ProductItem from '../components/ProductItem'

import products from '../data/products.json'


const ItemListCategories = ({category, category_title}) => {

  const [productsFiltered,setProductsFiltered] = useState([])

  useEffect(()=>{
    setProductsFiltered(products.filter(product => product.category === category))
  },[category])

  return (
    <SafeAreaView style={styles.container}>
        <Header title={category_title} />
        <Search />
        <FlatList
          data={productsFiltered}
          keyExtractor={item=>item.id}
          renderItem={({item})=> <ProductItem product={item} />}
        />
    </SafeAreaView>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%"

  }
})