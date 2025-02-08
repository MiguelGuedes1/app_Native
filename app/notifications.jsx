import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router"; // Importe o router para navegação

const Notifications = () => {
  // Notificações mockadas
  const notifications = [
    {
      id: 1,
      message: "Consultant João Reis changed the status of your reference to received.",
      timestamp: "10 minutes ago",
    },
    {
      id: 2,
      message: "Consultant Ricardo Santos changed the status of your reference to done.",
      timestamp: "2 hours ago",
    },
    {
      id: 3,
      message: "Consultant Maria Oliveira changed the status of your reference to in progress.",
      timestamp: "1 day ago",
    },
    {
      id: 4,
      message: "Consultant Ricardo Santos updated the details of your reference.",
      timestamp: "3 days ago",
    },
    {
      id: 5,
      message: "You received payment for your reference to Consultant Ana Pereira. Congratulations!! 🎉",
      timestamp: "5 days ago",
    },
    {
      id: 6,
      message: "You received payment for your reference to Consultant Pedro Silva. Congratulations!! 🎉",
      timestamp: "1 week ago",
    },
  ];

  return (
    <SafeAreaView className="bg-primary flex-1">
      {/* Cabeçalho com botão de voltar */}
      <View className="flex flex-row items-center p-4 border-b border-gray-700 gap-3">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-pbold ml-4">Notifications</Text>
      </View>

      {/* Lista de notificações */}
      <ScrollView className="bg-primary flex-1 p-4">
        {notifications.map((notification) => (
          <View
            key={notification.id}
            className="bg-primary p-4 rounded-lg mb-4 border border-white" // Borda mais fina
          >
            <Text className="text-white text-lg font-pregular">
              {notification.message}
            </Text>
            <Text className="text-gray-400 text-sm mt-2">
              {notification.timestamp}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notifications;