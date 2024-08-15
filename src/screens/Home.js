import { StyleSheet,SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import { titles } from '../global/texts'

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={titles.header}/>
      <Categories />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    width:"100%"
  }
})