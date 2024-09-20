import { FlatList, Text, View, StyleSheet } from 'react-native'
import Category from './Category'
import { colors } from '../global/colors'
import { useGetCategoriesQuery } from '../services/shop'
import LoadingSpinner from './LoadingSpinner'

const Categories = () => {

  const {data:categories, isLoading} = useGetCategoriesQuery()

  //Mientras carga
  if(isLoading) return <LoadingSpinner/>

  return (
      <View style={styles.container}>
        <FlatList
          data={categories}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({item}) => <Category item={item} />}
        />
      </View>
  )
}  
export default Categories
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white
  }
})