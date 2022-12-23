//screens imports
import { View } from 'react-native';
import GameScreen from './screens/GameScreen';

export default function App() {
  return (
    <View className="flex-1 pt-[45px]">
      <GameScreen />
    </View>
    
  );
}