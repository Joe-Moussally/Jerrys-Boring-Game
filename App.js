//screens imports
import { View,StatusBar } from 'react-native';
import GameScreen from './screens/GameScreen';

//redux imports
import { store } from './redux/store';
import { Provider } from 'react-redux';

export default function App() {

  console.log()
  return (
    <Provider store={store}>
      <View
        style={{paddingTop:StatusBar.currentHeight, flex:1}}
      >

        <StatusBar translucent={true}/>

        {/* Gameplay Component */}
        <GameScreen />
      </View>
    </Provider>
  );
}