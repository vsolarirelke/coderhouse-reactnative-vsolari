import React, { useEffect, useState } from 'react'
import { FlatList,View,Text, StyleSheet} from 'react-native'
import Search from '../components/Search'
import ProductItem from '../components/ProductItem'
import { useGetProductsByCategoryQuery } from '../services/shop'
import LoadingSpinner from '../components/LoadingSpinner'
import { colors } from '../global/colors'


const ItemListCategories = ({route}) => {

  const {categoryName} = route.params
  const {data: products, isSuccess, isLoading, isError, error} = useGetProductsByCategoryQuery(categoryName)
  const [productsFiltered,setProductsFiltered] = useState([])

  useEffect(()=>{
    if(isSuccess){
      setProductsFiltered(products)
    }
  },[categoryName,isSuccess])

  const onSearch = (input) => {

    if(input){
      setProductsFiltered(productsFiltered.filter(product => product.title.includes(input) ))
    }else{
      setProductsFiltered(products)
    }
   
  }

  if(isLoading) return <LoadingSpinner/>
  if(isError) return <View><Text>{error.message}</Text></View>

  return (
    <View style={styles.container}>
        <Search onSearch={onSearch} />
        <FlatList
          data={productsFiltered}
          keyExtractor={item=>item.id}
          renderItem={({item})=> <ProductItem product={item} />}
        />
    </View>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
    backgroundColor: colors.white
  }
})