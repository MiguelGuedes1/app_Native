import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Linking } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import info_consultores from "../../info_consultores/info_consultores";
import { StatusBar } from "expo-status-bar";

const Home = () => {

  const handleSocialLink = (url) => {
    Linking.openURL(url); // Abrir os links das redes sociais no navegador
  };
  
  return (
    <SafeAreaView className="flex-1"> 
    <ScrollView className="bg-primary py-8">
    <Text className="text-2xl font-semibold text-center text-white mb-6">
      Conheça os nossos Consultores Imobiliários
    </Text>

    <View className="flex flex-wrap justify-evenly">
      {info_consultores.map((consultor) => (
        <View
          key={consultor.id}
          className="w-44 p-4 bg-gray-100 rounded-xl mb-5 mx-2 border border-gray-300"
        >
          <View className="items-center">
            <Image
              className="w-32 h-32 rounded-full mb-4"
              source={consultor.imagem}
              alt={`Consultor ${consultor.id}`}
            />
            <Text className="text-xl font-semibold text-center text-gray-700 dark:text-white">
              {consultor.nome}
            </Text>
            <Text className="text-sm text-center text-gray-500 dark:text-gray-300 mb-4">
              {consultor.funcao}
            </Text>
          </View>

          <View className="flex flex-row justify-center space-x-4">
            <TouchableOpacity onPress={() => handleSocialLink(consultor.instagram)}>
              <Ionicons name="logo-instagram" size={24} color="#E4405F" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSocialLink(consultor.facebook)}>
              <Ionicons name="logo-facebook" size={24} color="#1877F2" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSocialLink(consultor.linkedin)}>
              <Ionicons name="logo-linkedin" size={24} color="#0A66C2" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  </ScrollView>
       <StatusBar backgroundColor="#161622" style="" />
  </SafeAreaView>
  )
}

export default Home

