import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home'
import ItemListCategories from './src/screens/ItemListCategories';
import ItemDetail from './src/screens/ItemDetail';

export default function App() {
  return (
    <>
      <Home />
      <ItemListCategories category={"smartphones"} category_title={"Smartphones"} /> 
      <ItemDetail id={1} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
