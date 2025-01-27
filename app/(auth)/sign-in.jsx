import { ScrollView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {

    console.log('Email:', email);
    console.log('Password:', password);
    router.push("/home")

  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{
          height: "100%",
        }} >

        <View className="w-full h-full justify-center px-4 my-6 items-center">
          {/* Logo */}
          <Image
            source={images.logo_invictus_semfundo_1}
            resizeMode="contain"
            className="w-[250px] h-[80px] justify-center "
          />

          {/* Título */}
          <Text className="text-2xl text-white font-semibold mt-10 font-psemibold">
            Log In to Invictus | References
          </Text>

          {/* Formulario */}
          <View className="mt-10 w-full ">
            {/* Input de Email */}
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor="#ccc"
              className="bg-black-100 rounded-xl px-5 py-7 mb-4 text-white w-full"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            {/* Input de Password */}
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor="#ccc"
              className="bg-black-100 rounded-xl px-4 py-7 mb-6 text-white w-full"
              secureTextEntry
            />

            {/* Botao para iniciar sessao*/}
            <TouchableOpacity
              onPress={handleSignIn}
              className="bg-secondary rounded-xl py-3">
              <Text className="text-center text-white text-lg font-semibold py-2">
                Sign In
              </Text>
            </TouchableOpacity>

            {/* Se nao estiver Registado */}
            <View className="flex-row justify-between mt-4">

            <TouchableOpacity
              onPress={(e) => router.push("/sign-up")}
             className="py-2 px-4 bg-transparent border border-white rounded-lg mt-2">
                <Text className="text-white text-sm text-center">
                  Not a member? <Text className="font-pbold">Register</Text>
                </Text>
              </TouchableOpacity>

            </View>
          </View>

        </View>
      </ScrollView>

    <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
