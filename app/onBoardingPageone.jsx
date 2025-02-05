import React from 'react';
import { StatusBar, Dimensions } from "react-native"; 
import { router } from "expo-router";
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; 
import { images } from "../constants";
import imagens from './imagens/imagens';

export default function OnBoardingPageOne() {
  const goToNextPage = () => {
    router.push("/onBoardingPagetwo");
  };

  // Obtém a altura da tela
  const windowHeight = Dimensions.get('window').height;

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          {/* Imagem Ilustrativa */}
          <Image
            source={imagens.about_image} 
            className="w-full mb-8"
            style={{ height: windowHeight * 0.5 }} // Ocupa 50% da altura da tela
            resizeMode="contain"
          />

          {/* Título */}
          <Text className="text-3xl text-white font-pbold text-center mb-4">
            Discover Real Estate Opportunities
          </Text>

          {/* Descrição */}
          <Text className="text-center font-pregular text-sm text-gray-100 mb-8">
            Find the best properties and connect with top real estate consultants.
            Your next big opportunity is just a reference away!
          </Text>

          {/* Indicador de Progresso (Pontos) */}
          <View className="flex-row mb-8">
            <View className="w-3 h-3 bg-secondary-200 rounded-full mr-2" />
            <View className="w-3 h-3 bg-gray-500 rounded-full mr-2" />
            <View className="w-3 h-3 bg-gray-500 rounded-full" />
          </View>

          {/* Botão de Ação com Ícone */}
          <TouchableOpacity
            onPress={goToNextPage}
            className="bg-[#FF8E01] rounded-xl py-4 px-6 flex-row justify-center items-center w-full"
          >
            <Text className="text-white font-bold text-lg">Next</Text>
            <Ionicons name="arrow-forward-outline" size={24} color="white" className="ml-2" />
          </TouchableOpacity>

          {/* Link para Pular */}
         
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}