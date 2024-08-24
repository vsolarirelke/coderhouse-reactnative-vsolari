import { FlatList, Text } from 'react-native'
import Category from './Category'
//import categories from '../data/categories.json'
import { useGetCategoriesQuery } from '../services/shop'

const Categories = () => {

  const {data:categories} = useGetCategoriesQuery()

  return (
      // <Text>Hola</Text>
      
      // <FlatList
      //   data={categories}
      //   keyExtractor={item => item.name}
      //   numColumns={2}
      //   renderItem={({item}) => <Category item={item} />}
      // />
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({item}) => <Category item={item} />}
      />
  )
}  
export default Categories