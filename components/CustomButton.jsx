import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const CustomButton = ({title,onPress }) => {


  return (

    <TouchableOpacity
    onPress={onPress}
    className="bg-[#FF8E01] rounded-xl py-4 px-6 flex justify-center items-center w-full">

    <Text className="text-white font-bold text-lg">{title}</Text>

  </TouchableOpacity>

  );
};

export default CustomButton;