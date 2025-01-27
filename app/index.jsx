import React from 'react';
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { ScrollView, Text,View,Image,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from "../constants"


export default function App() {

  const goToAuth = () => {
    router.push("/sign-in")
  }




  return (


    <SafeAreaView className="bg-primary h-full">
      

      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4 ">
         <Text className="text-3xl text-white font-pbold py-5 mb-5 " >
          Invictus | References
         </Text>

          <Image
            source={images.logo_invictus_semfundo_1}
            className="max-w-[340px] w-full h-[240px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-2xl text-white font-bold text-center">
            Turn Connections into {"\n"}
            Opportunities with{" "}
              <Text className="text-secondary-200 text-[22px]">Invictus References</Text>
            </Text>

     
          </View>

  
            <Text className="my-5 text-center font-pregular text-sm text-gray-100 ">
            Simplify your journey in the real estate market. Refer potential clients, 
            track negotiations, and get rewarded directly for your contribution.
            </Text>

       <TouchableOpacity
          onPress={goToAuth}
          className="bg-[#FF8E01] rounded-xl py-4 px-6 flex justify-center items-center w-full my-5">
      
          <Text className="text-white font-bold text-lg "> Continue with email </Text>
      
        </TouchableOpacity>
      

    

        
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
