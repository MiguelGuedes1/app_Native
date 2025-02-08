import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import imagens from "../imagens/imagens"
import { Redirect, router } from "expo-router";

const Profile = () => {
  const handleEditProfile = () => {
    console.log("Editar perfil");
  };

  const handleLogout = () => {
    router.push("/sign-in")
  };

  return (
    <SafeAreaView className="flex-1 bg-primary px-6">
      <ScrollView className="py-8">
        {/* Foto de Perfil */}
        <View className="items-center mb-6">
          <Image
            className="w-28 h-28 rounded-full border-4 border-gray-300 shadow-md"
            source={imagens.foto_opiniao_3}
          />
          <Text className="text-2xl font-bold text-white mt-4">Miguel Guedes</Text>
          <Text className="text-lg text-gray-300">miguelguedes16@gmail.com</Text>
        </View>

        {/* Botão Editar Perfil */}
        <TouchableOpacity
          onPress={handleEditProfile}
          className="bg-[#FF8E01] rounded-xl py-3 flex-row justify-center items-center mb-6"
        >
          <Ionicons name="create-outline" size={20} color="white" />
          <Text className="text-white font-bold text-lg ml-2">Edit Profile</Text>
        </TouchableOpacity>

        {/* Configurações */}
        <View className="bg-gray-800 p-4 rounded-xl mb-6">
          <Text className="text-gray-300 text-lg font-semibold mb-4">Settings</Text>
          <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-600">
            <Ionicons name="notifications-outline" size={24} color="white" />
            <Text className="text-white ml-4 text-lg">Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center py-3 border-b border-gray-600">
            <Ionicons name="shield-outline" size={24} color="white" />
            <Text className="text-white ml-4 text-lg">Security</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row items-center py-3">
            <Ionicons name="globe-outline" size={24} color="white" />
            <Text className="text-white ml-4 text-lg">Language</Text>
          </TouchableOpacity>
        </View>

        {/* Botão Logout */}
        <TouchableOpacity
          onPress={handleLogout}
          className="bg-red-600 rounded-xl py-3 flex-row justify-center items-center"
        >
          <Ionicons name="log-out-outline" size={20} color="white" />
          <Text className="text-white font-bold text-lg ml-2">Logout</Text>
        </TouchableOpacity>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Profile;
