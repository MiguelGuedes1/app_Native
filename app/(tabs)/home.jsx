import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Linking, Dimensions } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import info_consultores from "../../info_consultores/info_consultores";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const handleSocialLink = (url) => {
    Linking.openURL(url); // Abrir links das redes sociais no navegador
  };

  // Obtém a largura da tela
  const windowWidth = Dimensions.get('window').width;

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView className="bg-primary py-8 px-6">
        {/* Título da Página */}
        <Text className="text-4xl font-pbold text-center text-white mb-6">
          Meet Our Real Estate Consultants
        </Text>

        {/* Descrição Opcional */}
        <Text className="text-center text-white text-lg mb-8">
          Our consultants are experienced, passionate, and dedicated to helping you find the perfect property. Connect with them today!
        </Text>

        {/* Lista de Consultores */}
        <View className="flex flex-row flex-wrap justify-center">
          {info_consultores.map((consultor) => (
            <View
              key={consultor.id}
              className="w-[90%] sm:w-[45%] p-4 bg-primary rounded-2xl mb-5 mx-2 border border-gray-300 shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
              style={{ width: windowWidth * 0.45 }} // Ajusta a largura para 45% da tela
            >
              {/* Foto do Consultor */}
              <View className="items-center">
                <Image
                  className="w-36 h-36 rounded-full mb-4 border-4 border-gray-300 shadow-lg"
                  source={consultor.imagem}
                  alt={`Consultor ${consultor.id}`}
                />
                <Text className="text-xl font-pbold text-center text-white">
                  {consultor.nome}
                </Text>
                <Text className="text-sm font-pregular text-center text-white mb-4">
                  {consultor.funcao}
                </Text>
              </View>

              {/* Redes Sociais */}
              <View className="flex flex-row justify-center gap-2">
                <TouchableOpacity onPress={() => handleSocialLink(consultor.instagram)}>
                  <Ionicons name="logo-instagram" size={28} color="#E4405F" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleSocialLink(consultor.facebook)}>
                  <Ionicons name="logo-facebook" size={28} color="#1877F2" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleSocialLink(consultor.linkedin)}>
                  <Ionicons name="logo-linkedin" size={28} color="#0A66C2" />
                </TouchableOpacity>
                
              </View>
            </View>
          ))}
        </View>

        {/* Botão de Ação (Opcional) */}
        <TouchableOpacity
          className="bg-[#FF8E01] rounded-2xl py-4 px-6 flex-row justify-center items-center mx-8 mt-6"
          onPress={() => router.push("/send-reference")} // Navega para a tela de enviar referência
        >
          <Text className="text-white font-pbold text-lg">Send a Reference</Text>
          <Ionicons name="arrow-forward-outline" size={24} color="white" className="ml-2" />
        </TouchableOpacity>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Home;
