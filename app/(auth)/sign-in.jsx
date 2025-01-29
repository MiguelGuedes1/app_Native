import { ScrollView, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import imagens from '../imagens/imagens';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    router.push("/home");
  };

  return (
    <SafeAreaView className="flex-1">
      {/* Imagem como fundo */}
      <ImageBackground
        source={imagens.login_wallpaper}
        resizeMode="cover"
        className="flex-1 justify-center items-center"
      >
        {/* Conteúdo principal */}
        <View className="w-full px-6 justify-center">
          <Text className="text-4xl font-extrabold text-white text-center mb-6">
            Welcome Back
          </Text>
          <Text className="text-base text-gray-300 text-center mb-10">
            Log in to continue exploring Invictus | References
          </Text>

          {/* Input de Email */}
          <View className="bg-gray-800/70 rounded-xl flex-row items-center px-4 py-5 mb-4">
            <Ionicons name="mail-outline" size={20} color="#ccc" />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor="#ccc"
              className="flex-1 ml-3 text-white text-base"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Input de Password */}
          <View className="bg-gray-800/70 rounded-xl flex-row items-center px-4 py-5 mb-6">
            <Ionicons name="lock-closed-outline" size={20} color="#ccc" />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor="#ccc"
              className="flex-1 ml-3 text-white text-base"
              secureTextEntry
            />
          </View>

          {/* Botão de Login */}
          <TouchableOpacity
            onPress={handleSignIn}
            className="bg-secondary rounded-xl py-3"
          >
            <Text className="text-center text-white text-lg font-bold">
              Sign In
            </Text>
          </TouchableOpacity>

          {/* Link para Registro */}
          <TouchableOpacity
                        onPress={() => router.push("/sign-up")}
                        className="border border-white rounded-xl py-2 mt-4"
                      >
                        <Text className="text-center text-white text-sm">
                          Not a member? <Text className="font-bold">Register</Text>
                        </Text>
                      </TouchableOpacity>
        </View>
      </ImageBackground>
       <StatusBar backgroundColor="#161622" style="dark" />
    </SafeAreaView>
  );
};

export default SignIn;
