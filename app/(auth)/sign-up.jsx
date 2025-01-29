import { Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import imagens from '../imagens/imagens';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');

  const handleRegister = () => {
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    router.push("/sign-in");
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
            Create Account
          </Text>
          <Text className="text-base text-gray-300 text-center mb-10">
            Register to start exploring Invictus | References
          </Text>

          {/* Input de Username */}
          <View className="bg-gray-800/70 rounded-xl flex-row items-center px-4 py-5 mb-4">
            <Ionicons name="person-outline" size={20} color="#ccc" />
            <TextInput
              value={username}
              onChangeText={setUserName}
              placeholder="Username"
              placeholderTextColor="#ccc"
              className="flex-1 ml-3 text-white text-base"
            />
          </View>

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

          {/* Botão de Criar Conta */}
          <TouchableOpacity
            onPress={handleRegister}
            className="bg-secondary rounded-xl py-3"
          >
            <Text className="text-center text-white text-lg font-bold">
              Create Account
            </Text>
          </TouchableOpacity>

          {/* Link para Login */}
          <TouchableOpacity
            onPress={() => router.push("/sign-in")}
            className="border border-white rounded-xl py-2 mt-4"
          >
            <Text className="text-center text-white text-sm">
              Already a member? <Text className="font-bold">Sign in</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
       <StatusBar backgroundColor="#161622" style="" />
    </SafeAreaView>
  );
};

export default SignUp;
