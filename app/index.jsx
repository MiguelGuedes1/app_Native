import React from 'react';
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; // Importando ícones
import { images } from "../constants";

export default function App() {
  const goToAuth = () => {
    router.push("/onBoardingPageone");
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          {/* Logo e Título */}
          <View className="flex items-center mb-8">
            <Image
              source={images.logo_invictus_semfundo_1}
              className="w-[200px] h-[200px]"
              resizeMode="contain"
            />
            <Text className="text-3xl text-white font-pbold mt-4">
              Invictus | References
            </Text>
          </View>

          {/* Subtítulo com Ícone */}
          <View className="flex-row items-center mb-6">
            <Ionicons name="rocket-outline" size={24} color="#FF8E01" />
            <Text className="text-xl text-white font-bold ml-2">
              Turn Connections into Opportunities
            </Text>
          </View>

          {/* Descrição */}
          <Text className="text-center font-pregular text-sm text-gray-100 mb-8">
            Simplify your journey in the real estate market. Refer potential clients,
            track negotiations, and get rewarded directly for your contribution.
          </Text>

          {/* Botão de Ação com Ícone */}
          <TouchableOpacity
            onPress={goToAuth}
            className="bg-[#FF8E01] rounded-xl py-4 px-6 flex-row justify-center items-center w-full"
          >
             <Text className="text-white font-bold text-lg">Get Started</Text>
             <Ionicons name="arrow-forward-outline" size={24} color="white" className="ml-2" />
          </TouchableOpacity>

          {/* Rodapé com Ícones de Redes Sociais */}
          <View className="flex-row justify-center mt-8">
            <TouchableOpacity className="mx-3">
              <Ionicons name="logo-facebook" size={24} color="#FF8E01" />
            </TouchableOpacity>
            <TouchableOpacity className="mx-3">
              <Ionicons name="logo-twitter" size={24} color="#FF8E01" />
            </TouchableOpacity>
            <TouchableOpacity className="mx-3">
              <Ionicons name="logo-linkedin" size={24} color="#FF8E01" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}