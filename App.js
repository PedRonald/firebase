import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native'

import database from '@react-native-firebase/database'



export default function App(){
  const [item, setItem] = useState({})

  useEffect(() => {
    //ADICIONA DADOS NO FIREBASE
 //     database()//função do firebase
 //     .ref('/item')//nó inicial
 //     .set({
 //       text: 'Pedro',//adicionando filhos ao nó
 //       state: 'done',
 // })
 // .then(() => console.log('Data set.'));

    //LER OS DADOS DO FIREBASE
 database()
  .ref('/item')
  .once('value')
  .then(snapshot => {
    setItem(snapshot.val()); //Pega os dados do banco e joga no ITEM
  });
  },[]);
  return(
    <View>
      <Text>{item.text}</Text> 
      <Text>{item.state}</Text>
    </View>
  );
}