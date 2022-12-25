//screens imports
import { View,StatusBar } from 'react-native';
import GameScreen from './screens/GameScreen';

//redux imports
import { store } from './redux/store';
import { Provider } from 'react-redux';

//SQLite import
import * as SQLite from "expo-sqlite";
import { useEffect, useState } from 'react';

// expo font
import * as expoFont from 'expo-font'


//defining the local DB
const db = SQLite.openDatabase("main.db")



export default function App() {

  //font
  const [fontsLoaded] = expoFont.useFonts({
    'comic':require('./assets/fonts/comic.ttf')
  })

  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {

    // create user table if it doesn't exist
    db.transaction(tx => {
      tx.executeSql('CREATE TABLE IF NOT EXISTS user (name TEXT, balloons_count INTEGER)')
    })

    //check if user already exists in db
    db.transaction(tx => {
      // tx.executeSql('TRUNCATE TABLE user')
      // tx.executeSql('INSERT INTO user (name, balloons_count) VALUES ("JOE",1000)')
    })

    //check if user already exists
    db.transaction(tx => {
      tx.executeSql('SELECT * from user',null,(txObj,res) => {
        console.log(res.rows)
      })
    })
  },[])

  if(!fontsLoaded) return null

  return (
    <Provider store={store}>
      <View
        style={{marginTop:StatusBar.currentHeight, flex:1}}
      >

        {/* <StatusBar translucent={true}/> */}

        {/* Gameplay Component */}
        <GameScreen />
        
      </View>
    </Provider>
  );
}