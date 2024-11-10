import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { useLocalSearchParams, useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

const image = () => {
  const item = useLocalSearchParams();
  const router = useRouter();

  return (
    <BlurView
      intensity={100}
      tint="dark"
      className="w-screen h-full flex justify-center items-center"
    >
      <View className="w-[80%] h-[60%]  mx-auto">
        <View className="h-full">
          <Image
            source={{ uri: item?.webformatURL }}
            height={100}
            width={100}
            className="w-full h-[80%] rounded-lg mb-2"
          />

          <View className="flex flex-row justify-between w-[80%] mx-auto mt-5">
            <TouchableOpacity onPress={() => router.back()}  className="">
              <Feather name="x" size={45} color="white" />
            </TouchableOpacity>
            <TouchableOpacity className="">
            <MaterialCommunityIcons name="download" size={45} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.back()} className="">
            <Entypo name="share" size={45} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </BlurView>
  );
};

export default image;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blurContainer: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
