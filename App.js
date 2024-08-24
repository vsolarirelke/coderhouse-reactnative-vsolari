import { StatusBar } from 'expo-status-bar';
import Navigator from './src/navigation/Navigator'
import { store } from './src/app/store'
import { Provider } from 'react-redux'

import { colors } from './src/global/colors'

export default function App() {
  
  return (
    <>
      <Provider store={store}>
        <Navigator/>
      </Provider>
      <StatusBar style="light" backgroundColor={colors.white} />
    </>
  );
}