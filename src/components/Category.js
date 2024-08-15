import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../global/colors'

const Category = ({item,handleCategorySelected}) => {
  return (
    <Pressable onPress={()=>handleCategorySelected(item)}>

          <View style={styles.itemContainer}>
            <Image
              source={{ uri: item.thumbnail }}
              resizeMode='cover'
              style={styles.logo}
            />
            <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">{item.name}</Text>
          </View>
    </Pressable>

  )
}

export default Category

const styles = StyleSheet.create({
    // container:{
    //     width:"90%",
    //     marginHorizontal:"5%",
    //     backgroundColor:colors.green1,
    //     marginVertical:10,
    //     padding:20,
    //     justifyContent:"center",
    //     alignItems:"center",
    //     borderRadius:3,
 
    // },
    itemContainer: {
        alignItems: 'center',
        // //borderRadius: 8,
        marginHorizontal:20,
        marginVertical:20,
        height: 150,
        width: 150,
    },
    logo: {
        borderRadius: 50,
        height: 120,
        width: 120,
        shadowColor: colors.white, 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3, 
        shadowRadius: 10,
    },
    text:{
        fontSize: 16,
        marginTop: 12,
        //colo:'white',
        textAlign:'center',
        fontWeight:'bold',

        //shadowColor: '#000', 
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.1, 
        //shadowRadius: 2,
    }
})