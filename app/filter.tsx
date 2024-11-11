import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { useLocalSearchParams, useRouter } from "expo-router";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const filter = () => {
  const {data} = useLocalSearchParams();
  const router = useRouter();
  const { query } = router;

  console.log("filter page ", query)

  return (
      <BottomSheet>
        <BottomSheetView style={styles.contentContainer}>
          <View className="px-10 py-5 gap-5">
            <View>
              <Text className="text-4xl font-bold">Filters</Text>
            </View>

            <View className="gap-3">
              <Text className="text-2xl font-semibold">Order</Text>
              <View className="flex flex-row gap-5">
                <TouchableOpacity className="border border-gray-300 rounded-lg">
                  <Text className="text-gray-500 px-5 py-2">Popular</Text>
                </TouchableOpacity>
                <TouchableOpacity className="border border-gray-300 rounded-lg">
                  <Text className="text-gray-500 px-5 py-2">Popular</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="gap-3">
              <Text className="text-2xl font-semibold">Orientation</Text>
              <View className="flex flex-row gap-5">
                <TouchableOpacity className="border border-gray-300 rounded-lg">
                  <Text className="text-gray-500 px-5 py-2">Horizontal</Text>
                </TouchableOpacity>
                <TouchableOpacity className="border border-gray-300 rounded-lg">
                  <Text className="text-gray-500 px-5 py-2">Vertical</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="gap-3">
              <Text className="text-2xl font-semibold">Type</Text>
              <View className="flex flex-row gap-5">
                <TouchableOpacity className="border border-gray-300 rounded-lg">
                  <Text className="text-gray-500 px-5 py-2">Phot</Text>
                </TouchableOpacity>
                <TouchableOpacity className="border border-gray-300 rounded-lg">
                  <Text className="text-gray-500 px-5 py-2">Illustration</Text>
                </TouchableOpacity>
                <TouchableOpacity className="border border-gray-300 rounded-lg">
                  <Text className="text-gray-500 px-5 py-2">Vector</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="gap-3">
              <Text className="text-2xl font-semibold">Colors</Text>
              <View className="flex flex-row flex-wrap gap-5">
                {/* Red */}
                <TouchableOpacity>
                  <View className="w-[50px] h-[50px] rounded-lg bg-red-500"></View>
                </TouchableOpacity>
                {/* Orange */}
                <TouchableOpacity>
                  <View className="w-[50px] h-[50px] rounded-lg bg-orange-500"></View>
                </TouchableOpacity>
                {/* Yellow */}
                <TouchableOpacity>
                  <View className="w-[50px] h-[50px] rounded-lg bg-yellow-500"></View>
                </TouchableOpacity>
                {/* Green */}
                <TouchableOpacity>
                  <View className="w-[50px] h-[50px] rounded-lg bg-green-500"></View>
                </TouchableOpacity>
                {/* Turquoise */}
                <TouchableOpacity>
                  <View className="w-[50px] h-[50px] rounded-lg bg-teal-400"></View>
                </TouchableOpacity>
                {/* Blue */}
                <TouchableOpacity>
                  <View className="w-[50px] h-[50px] rounded-lg bg-blue-500"></View>
                </TouchableOpacity>
                {/* Pink */}
                <TouchableOpacity>
                  <View className="w-[50px] h-[50px] rounded-lg bg-pink-500"></View>
                </TouchableOpacity>
                {/* Gray */}
                <TouchableOpacity>
                  <View className="w-[50px] h-[50px] rounded-lg bg-gray-500"></View>
                </TouchableOpacity>
                {/* Black */}
                <TouchableOpacity>
                  <View className="w-[50px] h-[50px] rounded-lg bg-black"></View>
                </TouchableOpacity>
                {/* Brown */}
                <TouchableOpacity>
                  <View
                    className="w-[50px] h-[50px] rounded-lg"
                    style={{ backgroundColor: "#A52A2A" }}
                  ></View>
                </TouchableOpacity>
              </View>
            </View>

            <View className="my-10">
                <View className="flex flex-row justify-between">
                    <TouchableOpacity className="border border-gray-300 bg-slate-100 px-[60px] py-4 rounded-lg">
                        <Text>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="bg-slate-800 px-[60px] py-4 rounded-lg">
                        <Text className="text-slate-400">Apply</Text>
                    </TouchableOpacity>
                </View>
            </View>
          </View>
        </BottomSheetView>
      </BottomSheet>
  );
};

export default filter;

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
  contentContainer: {
    flex: 1,
  },
});
