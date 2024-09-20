import { StyleSheet, View } from 'react-native'
import React from 'react'
import Categories from '../components/Categories'
import { colors } from '../global/colors'

const Home = () => {
  return (
    <View style={styles.container}>
      <Categories />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    width:"100%",
    backgroundColor: colors.white,
  }
})