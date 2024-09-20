import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { useFonts } from 'expo-font'
// import { fonts } from './src/global/fonts'
import { colors } from './src/global/colors'
import MainNavigator from './src/navigation/MainNavigator'
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import { init } from './src/db'

export default function App() {

  
  init()
  
  // const [fontLoaded] = useFonts(fonts)

  // if(!fontLoaded){
  //   return null
  // } 

  return (
    <>
      <Provider store={store} style={styles.main}>
        <MainNavigator/>
      </Provider>
      <StatusBar style="dark" backgroundColor={colors.white} />
    </>
  )
}

const styles = StyleSheet.create({
  main:{
    backgroundColor: colors.white
  }
})
