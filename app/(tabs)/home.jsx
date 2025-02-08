import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Linking, Dimensions, Modal, TextInput,TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import info_consultores from "../../info_consultores/info_consultores";
import { Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import imagens from "../imagens/imagens";
import { push } from "expo-router/build/global-state/routing";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedConsultor, setSelectedConsultor] = useState(null);
  const [formData, setFormData] = useState({
    Reference_Name: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleSocialLink = (url) => {
    Linking.openURL(url);
  };

  const handleOpenModal = (consultor) => {
    setSelectedConsultor(consultor);
    setModalVisible(true);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSendReference = () => {
    console.log(`Reference sent to ${selectedConsultor?.nome}:`, formData);
    setFormData({
      Reference_Name: "",
      phone: "",
      location: "",
      message: "",
    });
    setModalVisible(false);
  };

  const windowWidth = Dimensions.get("window").width;

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView className="bg-primary py-8 px-6">
        <View className="flex flex-row justify-between items-center px-3 mb-12 pb-6">
          {/* Mensagem de boas-vindas */}
          <Text className="text-white text-3xl font-pbold">
            Hi, Miguel 👋
          </Text>

          {/* Foto do usuário e ícone de notificações */}
          <View className="flex flex-row items-center gap-3">
            {/* Foto do usuário */}
            <Image
              source={imagens.foto_opiniao_3}
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            {/* Ícone de notificações */}
            <View className="relative">
              <Ionicons
                onPress={() => router.push("/notifications")}
                name="notifications-outline"
                size={30}
                color="white"
              />
              {/* Número de notificações pendentes */}
              <View className="absolute -top-2 -right-2 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center">
                <Text className="text-white text-sm font-bold">6</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Título da Página */}
        <Text className="text-[36px] font-pbold text-center text-white mb-6 mt-6">
          Meet Our Real Estate Consultants
        </Text>

        {/* Descrição */}
        <Text className="text-center text-white text-lg mb-8">
          Our consultants are experienced, passionate, and dedicated to helping you find the perfect property. Connect with them today!
        </Text>

        {/* Lista de Consultores */}
        <View className="flex flex-row flex-wrap justify-center">
          {info_consultores.map((consultor) => (
            <View
              key={consultor.id}
              className="w-[90%] sm:w-[45%] p-4 bg-primary rounded-2xl mb-5 mx-2 border border-gray-300 shadow-xl"
              style={{ width: windowWidth * 0.45 }}
            >
              {/* Foto do Consultor */}
              <View className="items-center">
                <Image
                  className="w-36 h-36 rounded-full mb-4 border-4 border-gray-300 shadow-lg"
                  source={consultor.imagem}
                  alt={`Consultor ${consultor.id}`}
                />
                <Text className="text-xl font-pbold text-center text-white">{consultor.nome}</Text>
                <Text className="text-sm font-pregular text-center text-white mb-4">{consultor.funcao}</Text>
              </View>

              {/* Redes Sociais */}
              <View className="flex flex-row justify-center gap-2 mb-4">
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

              {/* Botão de Enviar Referência */}
              <TouchableOpacity
                className="bg-[#FF8E01] rounded-2xl py-3 px-6 flex-row justify-center items-center"
                onPress={() => handleOpenModal(consultor)}
              >
                <Text className="text-white font-pbold text-lg">Send Reference</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />

      {/* Modal de Envio de Referência */}
                <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            {/* Envolve o modal com TouchableWithoutFeedback para fechar ao clicar fora */}
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
              <View className="flex-1 justify-center items-center bg-black/50">
                {/* Impede que o modal feche ao clicar dentro dele */}
                <TouchableWithoutFeedback>
                  <View className="bg-primary p-6 rounded-2xl w-[90%] max-w-lg border-2 border-white">
                    <Text className="text-2xl font-bold text-center mb-4 text-white">
                      Send a Reference to {selectedConsultor?.nome}
                    </Text>

                    {/* Campos do Formulário */}
                    <TextInput
                      className="border border-gray-300 rounded-lg px-4 py-3 mb-4 text-white"
                      placeholder="Reference name"
                      placeholderTextColor="#999"
                      value={formData.Reference_Name}
                      onChangeText={(text) => handleInputChange("Reference_Name", text)}
                    />
                    <TextInput
                      className="border border-gray-300 rounded-lg px-4 py-3 mb-4 text-white"
                      placeholder="Phone Number"
                      placeholderTextColor="#999"
                      keyboardType="phone-pad"
                      value={formData.phone}
                      onChangeText={(text) => handleInputChange("phone", text)}
                    />
                    <TextInput
                      className="border border-gray-300 rounded-lg px-4 py-3 mb-4 text-white"
                      placeholder="Location"
                      placeholderTextColor="#999"
                      value={formData.location}
                      onChangeText={(text) => handleInputChange("location", text)}
                    />
                    <TextInput
                      className="border border-gray-300 rounded-lg px-4 py-3 mb-4 text-white"
                      placeholder="Message"
                      placeholderTextColor="#999"
                      multiline
                      numberOfLines={4}
                      value={formData.message}
                      onChangeText={(text) => handleInputChange("message", text)}
                    />

                    {/* Botões */}
                    <View className="flex-row justify-between mt-4">
                      <TouchableOpacity
                        className="px-6 py-3 bg-gray-300 rounded-lg"
                        onPress={() => setModalVisible(false)}
                      >
                        <Text className="text-gray-700 font-pbold">Cancel</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        className="px-6 py-3 bg-[#FF8E01] rounded-lg"
                        onPress={handleSendReference}
                      >
                        <Text className="text-white font-pbold">Send</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </TouchableWithoutFeedback>
          </Modal>


    </SafeAreaView>
  );
};

export default Home;