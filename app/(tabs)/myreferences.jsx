import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Dimensions, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

// Dados dos consultores (simulados)
const consultantsData = [
  { id: 1, nome: "Maria Oliveira", imagem: "https://example.com/john-doe.jpg" },
  { id: 2, nome: "Ricardo Santos", imagem: "https://example.com/jane-smith.jpg" },
  { id: 3, nome: "Joao Reis", imagem: "https://example.com/carlos-mendes.jpg" },
  { id: 4, nome: "Mario Nogueira", imagem: "https://example.com/carlos-mendes.jpg" },
];

// Simulação do usuário logado e as referências enviadas
const userLogged = {
  username: "miguelguedes", // Nome do usuário logado
};

const referencesData = [
  {
    id: 1,
    username: "miguelguedes", // ID do usuário logado
    consultant: consultantsData[0], // "Maria Oliveira"
    phone: "915468978",
    location: "Lisbon",
    message: "I know a property in Lisbon that's perfect for your needs. Let me know if you're interested!",
    status: "received", // Alterado de "sent" para "received"
  },
  {
    id: 2,
    username: "miguelguedes",
    consultant: consultantsData[1], // "Ricardo Santos"
    phone: "935647800",
    location: "Porto",
    message: "I heard of a great house for sale in Porto. It could be the right fit for you!",
    status: "on analyse",
  },
  {
    id: 3,
    username: "miguelguedes",
    consultant: consultantsData[2], // "Joao Reis"
    phone: "910257847",
    location: "Espinho",
    message: "A friend of mine is looking to buy a property in Espinho. Let me know if you'd like more details.",
    status: "done",
  },
  {
    id: 4,
    username: "miguelguedes",
    consultant: consultantsData[3], // "Mario Nogueira"
    phone: "967892211",
    location: "Boavista",
    message: "I have a house to sell in the middle of Boavista, call me to try make a deal!.",
    status: "rejected",
  },
];

// Filtrar referências enviadas pelo usuário logado
const userReferences = referencesData.filter(
  (reference) => reference.username === userLogged.username
);

const Myreferences = () => {
  const windowWidth = Dimensions.get("window").width;
  const [progress] = useState(new Animated.Value(0));

  // Função para estilizar o estado da referência
  const getStatusStyle = (status) => {
    switch (status) {
      case "received":
        return { backgroundColor: "#FFD700", color: "white", icon: "alert-circle-outline" };
      case "on analyse":
        return { backgroundColor: "#FF8E01", color: "#fff", icon: "time-outline" };
      case "rejected":
        return { backgroundColor: "#DC3545", color: "#fff", icon: "close-circle-outline" };
      case "done":
        return { backgroundColor: "#28A745", color: "#fff", icon: "checkmark-circle-outline" };
      default:
        return {};
    }
  };

  // Animação da barra de progresso
  const animateProgress = (status) => {
    let toValue;
    switch (status) {
      case "received":
        toValue = 0.25;
        break;
      case "on analyse":
        toValue = 0.5;
        break;
      case "rejected":
        toValue = 0.75;
        break;
      case "done":
        toValue = 1;
        break;
      default:
        toValue = 0;
    }
    Animated.timing(progress, {
      toValue,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-900">
      <ScrollView className="bg-gray-900 py-8 px-6">
        {/* Cabeçalho Moderno */}
        <View className="items-center mb-8">
          <Text className="text-5xl font-pbold text-center text-white my-3 py-5">
            Your Sent References
          </Text>
          <Text className="text-lg text-gray-300 text-center max-w-[80%]">
            Each reference is carefully analyzed by our team to ensure the best possible outcome. 
            Your trust is our priority, and we handle every detail with professionalism and care.
          </Text>
        </View>

        {/* Lista de Referências */}
        <View className="flex flex-col gap-4">
          {userReferences.map((reference) => {
            const statusStyle = getStatusStyle(reference.status);
            animateProgress(reference.status);

            return (
              <View
                key={reference.id}
                className="w-[90%] sm:w-[45%] p-4 bg-gray-800 rounded-2xl mb-5 mx-2 border border-gray-700 shadow-xl"
                style={{ width: windowWidth * 0.9 }}
              >
                {/* Dados da Referência */}
                <View className="flex flex-row items-center mb-2">
                  <Ionicons name={statusStyle.icon} size={24} color={statusStyle.color} />
                  <Text className="text-white text-lg ml-2">Real State Broker: {reference.consultant.nome}</Text>
                </View>
                <Text className="text-white text-sm">Phone: {reference.phone}</Text>
                <Text className="text-white text-sm mb-2">Location: {reference.location}</Text>
                <Text className="text-white italic mb-3">Message: "{reference.message}"</Text>

                {/* Barra de Progresso Dinâmica */}
                <View className="w-full h-2 bg-gray-700 rounded-full mb-3">
                  <Animated.View
                    className="h-2 bg-blue-500 rounded-full"
                    style={{
                      width: progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0%", "100%"],
                      }),
                    }}
                  />
                </View>

                {/* Status da Referência */}
                <View
                  className="py-2 px-4 rounded-xl flex items-center"
                  style={{ backgroundColor: statusStyle.backgroundColor }}
                >
                  <Text
                    className="font-pbold text-lg"
                    style={{ color: statusStyle.color }}
                  >
                    {reference.status === "received"
                      ? "Received"
                      : reference.status === "on analyse"
                      ? "On Analyse"
                      : reference.status === "rejected"
                      ? "Rejected"
                      : "Done, you will be paid soon"}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#1A1A1A" style="light" />
    </SafeAreaView>
  );
};

export default Myreferences;