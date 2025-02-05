import React from 'react';
import { StatusBar, Dimensions } from "react-native";
import { router } from "expo-router";
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; 
import imagens from './imagens/imagens';

export default function OnBoardingPageThree() {
  const goToSignIn = () => {
    router.push("/sign-in"); 
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
            source={imagens.office} 
            className="w-full mb-8"
            style={{ height: windowHeight * 0.5 }} 
            resizeMode="contain"
          />

          {/* Título */}
          <Text className="text-3xl text-white font-pbold text-center mb-4">
            Trusted by Hundreds of Users
          </Text>

          {/* Descrição */}
          <Text className="text-center font-pregular text-sm text-gray-100 mb-8">
            Our app is trusted by hundreds of users, and your security is our top priority. 
            We ensure a safe environment for all users to make the best decisions.
          </Text>

          {/* Ícones de Segurança e Confiança */}
          <View className="flex-row justify-center mb-8">
            <Ionicons name="shield-checkmark" size={30} color="white" className="mr-4" />
            <Ionicons name="person-add" size={30} color="white" className="mr-4" />
            <Ionicons name="key" size={30} color="white" />
          </View>

          {/* Botão de Ação com Ícone para Sign-In */}
          <TouchableOpacity
            onPress={goToSignIn}
            className="bg-[#FF8E01] rounded-xl py-4 px-6 flex-row justify-center items-center w-full"
          >
            <Text className="text-white font-bold text-lg">Sign In</Text>
            <Ionicons name="log-in-outline" size={24} color="white" className="ml-2" />
          </TouchableOpacity>

        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
