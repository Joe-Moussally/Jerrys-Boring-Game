//screens imports
import { View } from 'react-native';
import GameScreen from './screens/GameScreen';

//redux imports
import { store } from './redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <View className="flex-1 pt-[45px]">
        <GameScreen />
      </View>
    </Provider>
  );
}