import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FormField = ({title,value,handleChangeText,otherStyles,KeyboardType,placeholder, ...props}) => {


  return (


    <View className={` space-y-2 ${otherStyles}   `}>
      <Text className="text-base text-gray-100 font-pmedium ">{title}</Text>
    </View>
  )
}

export default FormField

const styles = StyleSheet.create({})