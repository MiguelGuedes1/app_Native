import React, { useState } from 'react'; // Importar React junto com o hook useState
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Link} from "expo-router"

export default function App() {
  const [number, setNumber] = useState(0)

  const upgradeNumber = () => {
    setNumber(number+1)
  }

  return (
    <View className="flex justify-center items-center w-full h-full gap-5">
      <Text>{number}</Text>
      <Text className="font-pmedium" onPress={upgradeNumber}> Aumentar numerooo </Text>
      <Text className="text-4xl font-pbold" >Amo te Liliana</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{color:"blue"}}>Go to Profile0000</Link>
      <Link href="/about" style={{color:"blue"}}>Go to About</Link>
    </View>


  );
}
2
