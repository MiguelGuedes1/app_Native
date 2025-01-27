import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Bell, Search, User } from "lucide-react-native";

const Home = () => {
  return (
    <SafeAreaView className="">
      <ScrollView>
        <View>
          <Text>Pagina Home</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

