import React, { useState } from "react";
import { View, Text, Image, ScrollView, Dimensions, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import info_opinioes from "../../info_opinioes/info_opinioes";
import { StatusBar } from "expo-status-bar";

const Reviews = () => {
  const [newReview, setNewReview] = useState({
    nome: "",
    cargo: "",
    opiniao: "",
    rating: 0,
  });

  const [reviews, setReviews] = useState(info_opinioes);
  const windowWidth = Dimensions.get("window").width;

  const handleInputChange = (field, value) => {
    setNewReview({ ...newReview, [field]: value });
  };

  const handleSubmitReview = () => {
    if (newReview.nome && newReview.cargo && newReview.opiniao && newReview.rating > 0) {
      setReviews([...reviews, newReview]);
      setNewReview({ nome: "", cargo: "", opiniao: "", rating: 0 });
    } else {
      alert("Please fill in all fields and select a rating.");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView className="py-8 px-6">
        {/* Titulo */}
        <View className="items-center mb-8">
          <Text className="text-5xl font-pbold text-center text-white mb-3 mt-5 py-5">
            Client Reviews
          </Text>
          <Text className="text-lg text-gray-300 text-center max-w-[80%]">
            Discover what our clients are saying about their experiences. Your feedback helps us grow and improve!
          </Text>
        </View>

        {/* Lista de Opiniões */}
        <View className="flex flex-row flex-wrap justify-center">
          {reviews.map((opiniao, index) => (
            <View
              key={index}
              className="w-[90%] sm:w-[45%] bg-primary rounded-2xl p-6 mb-6 shadow-xl border border-gray-700"
              style={{
                width: windowWidth * 0.9,
                maxWidth: 380,
                elevation: 5,
              }}
            >
              {/* Foto e Nome */}
              <View className="flex items-center">
                <Image
                  className="w-20 h-20 rounded-full mb-3 border-4 border-gray-300 shadow-md"
                  source={opiniao.imagem}
                  alt={`Photo of ${opiniao.nome}`}
                />
                <Text className="text-xl font-semibold text-white">
                  {opiniao.nome}
                </Text>
                <Text className="text-sm text-gray-300">{opiniao.cargo}</Text>

                {/* Estrelas de Avaliação */}
                <View className="flex flex-row mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Ionicons
                      key={i}
                      name="star"
                      size={20}
                      color={"yellow"}
                    />
                  ))}
                </View>
              </View>

              {/* Opinião */}
              <Text className="text-white text-center mt-4 italic">
                "{opiniao.opiniao}"
              </Text>
            </View>
          ))}
        </View>

        {/* User Review Form */}
        <View className="bg-primary rounded-2xl p-6 mb-6 shadow-xl border border-gray-700">
          <Text className="text-2xl font-semibold text-white text-center mb-4">
            Share Your Review
          </Text>
          <TextInput
            className="border border-gray-600 rounded-lg px-4 py-2 mb-3 text-white bg-gray-800"
            placeholder="Your Name"
            placeholderTextColor="#A0AEC0"
            value={newReview.nome}
            onChangeText={(text) => handleInputChange("nome", text)}
          />
          <TextInput
            className="border border-gray-600 rounded-lg px-4 py-2 mb-3 text-white bg-gray-800"
            placeholder="Your Position"
            placeholderTextColor="#A0AEC0"
            value={newReview.cargo}
            onChangeText={(text) => handleInputChange("cargo", text)}
          />
          <TextInput
            className="border border-gray-600 rounded-lg px-4 py-2 mb-3 text-white bg-gray-800"
            placeholder="Your Review"
            placeholderTextColor="#A0AEC0"
            value={newReview.opiniao}
            onChangeText={(text) => handleInputChange("opiniao", text)}
            multiline
            numberOfLines={3}
          />

          {/* Rating Selector */}
          <Text className="text-white mb-3">Rating:</Text>
          <View className="flex flex-row mb-4">
            {[...Array(5)].map((_, i) => (
              <TouchableOpacity key={i} onPress={() => handleInputChange("rating", i + 1)}>
                <Ionicons
                  name="star"
                  size={30}
                  color={i < newReview.rating ? "#FFD700" : "#DDDDDD"}
                />
              </TouchableOpacity>
            ))}
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            className="bg-[#FF8E01] rounded-2xl py-2 px-4 flex-row justify-center items-center"
            onPress={handleSubmitReview}
          >
            <Text className="text-white font-pbold">Submit Review</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Reviews;