//screens imports
import { View,StatusBar } from 'react-native';
import GameScreen from './screens/GameScreen';

//redux imports
import { store } from './redux/store';
import { Provider } from 'react-redux';

//SQLite import
import * as SQLite from "expo-sqlite";
import { useEffect, useState } from 'react';



//defining the local DB
const db = SQLite.openDatabase("main.db")

// //function to create table if it doesn't exist
// const createTable = () => {
//   db.transaction(tx => {
//     tx.executeSql(
//       "CREATE TABLE IF NOT EXIST"
//       +"user"
//       +"(name TEXT, balloons INTEGER)"
//     )
//   })
// }

// //function to set data to db
// const setData = () => {
//   db.transaction(tx => {
//     tx.executeSql(
//       "INSERT INTO user (name, balloons) VALUES ('Joe', 2000)"
//     )
//   })
// }

// const getData = () => {
//   db.transaction(tx => {
//     tx.executeSql(
//       "SELECT name, balloons FROM user",
//       [],
//       (tx,result) => {
//         console.log(result.rows)
//         var len = result.rows.length
//         if(len > 0) {
//           console.log(result)
//           var name = result.rows.item[0].name
//           var balloons = result.rows.item[0].balloons
//         }
//       }
//     )
//   })
// }

export default function App() {

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