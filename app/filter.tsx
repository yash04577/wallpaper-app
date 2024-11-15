import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { BlurView } from "expo-blur";
import { useLocalSearchParams, useRouter } from "expo-router";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { resetData } from "@/redux/imageSlice";

const filter = () => {

  const route = useRoute();
  const {query, setQuery} = route.params;
  const dispatch = useDispatch();
  const router = useRouter();

  const [filters, setFilters] = useState({
    image_type: "",
    order: "",
    colors: "",
    orientation: "",
  })

  const handleSelect = (key:string, value:string) =>{
    // console.log("key ", key)
    // console.log("sel ", filters[key]);
    const selectedKey = filters[key];

    if(selectedKey == value){
      setFilters((prev)=> ({
        ...prev,
        [key]: ""
      }))
    }
    else{
      setFilters((prev)=> ({
        ...prev,
       [key] : value
      }))
    }

  }
// useEffect(()=>{
//   console.log("fill ", filters)
// },[filters])

const handleReset = () =>{

  router.back(); 

  setFilters({
    image_type: "",
    order: "",
    colors: "",
    orientation: "",
  })
}

const handleApply = async() =>{

  dispatch(resetData());

  setQuery((prev)=>({
    ...prev,
    ...filters,
    page: 1
  }))

  router.back();
}

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
                <TouchableOpacity onPress={()=>handleSelect("order" ,"popular")} className={`border border-gray-300 rounded-lg ${filters.order == "popular" ? "bg-gray-500" : ""}`}>
                  <Text className={`${filters?.order == "popular" ? "text-white" : "text-gray-500"} px-5 py-2`}>Popular</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>handleSelect("order" ,"latest")} className={`border border-gray-300 rounded-lg ${filters.order == "latest" ? "bg-gray-500" : ""}`}>
                  <Text className={`${filters?.order == "latest" ? "text-white" : "text-gray-500"} px-5 py-2`}>Latest</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="gap-3">
              <Text className="text-2xl font-semibold">Orientation</Text>
              <View className="flex flex-row gap-5">
              <TouchableOpacity onPress={()=>handleSelect("orientation" ,"horizontal")} className={`border border-gray-300 rounded-lg ${filters.orientation == "horizontal" ? "bg-gray-500 text-white" : ""}`}>
                  <Text className={`${filters?.orientation == "horizontal" ? "text-white" : "text-gray-500"} px-5 py-2`}>Horizontal</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>handleSelect("orientation" ,"vertical")} className={`border border-gray-300 rounded-lg ${filters.orientation == "vertical" ? "bg-gray-500 text-white" : ""}`}>
                  <Text className={`${filters?.orientation == "vertical" ? "text-white" : "text-gray-500"} px-5 py-2`}>Vertical</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="gap-3">
              <Text className="text-2xl font-semibold">Type</Text>
              <View className="flex flex-row gap-5">
              <TouchableOpacity onPress={()=>handleSelect("image_type" ,"photo")} className={`border border-gray-300 rounded-lg ${filters.image_type == "photo" ? "bg-gray-500 text-white" : ""}`}>
                  <Text className={`${filters?.image_type == "photo" ? "text-white" : "text-gray-500"} px-5 py-2`}>Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>handleSelect("image_type" ,"illustration")} className={`border border-gray-300 rounded-lg ${filters.image_type == "illustration" ? "bg-gray-500 text-white" : ""}`}>
                  <Text className={`${filters?.image_type == "illustration" ? "text-white" : "text-gray-500"} px-5 py-2`}>Illustration</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>handleSelect("image_type" ,"vector")} className={`border border-gray-300 rounded-lg ${filters.image_type == "vector" ? "bg-gray-500 text-white" : ""}`}>
                  <Text className={`${filters?.image_type == "vector" ? "text-white" : "text-gray-500"} px-5 py-2`}>Vector</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View className="gap-3">
              <Text className="text-2xl font-semibold">Colors</Text>
              <View className="flex flex-row flex-wrap gap-5">
                {/* Red */}
                <TouchableOpacity className={`${filters?.colors == "red" ? "border-2 border-green-800 rounded-lg": ""}`} onPress={()=>handleSelect("colors", "red")}>
                  <View className="w-[50px] h-[50px] rounded-lg bg-red-500"></View>
                </TouchableOpacity>
                {/* Orange */}
                <TouchableOpacity className={`${filters?.colors == "orange" ? "border-2 border-green-800 rounded-lg": ""}`} onPress={()=>handleSelect("colors", "orange")}>
                  <View className="w-[50px] h-[50px] rounded-lg bg-orange-500"></View>
                </TouchableOpacity>
                {/* Yellow */}
                <TouchableOpacity className={`${filters?.colors == "yellow" ? "border-2 border-green-800 rounded-lg": ""}`} onPress={()=>handleSelect("colors", "yellow")}>
                  <View className="w-[50px] h-[50px] rounded-lg bg-yellow-500"></View>
                </TouchableOpacity>
                {/* Green */}
                <TouchableOpacity className={`${filters?.colors == "green" ? "border-2 border-green-800 rounded-lg": ""}`} onPress={()=>handleSelect("colors", "green")}>
                  <View className="w-[50px] h-[50px] rounded-lg bg-green-500"></View>
                </TouchableOpacity>
                {/* Turquoise */}
                <TouchableOpacity className={`${filters?.colors == "turquoise" ? "border-2 border-green-800 rounded-lg": ""}`} onPress={()=>handleSelect("colors", "turquoise")}>
                  <View className="w-[50px] h-[50px] rounded-lg bg-teal-400"></View>
                </TouchableOpacity>
                {/* Blue */}
                <TouchableOpacity className={`${filters?.colors == "blue" ? "border-2 border-green-800 rounded-lg": ""}`} onPress={()=>handleSelect("colors", "blue")}>
                  <View className="w-[50px] h-[50px] rounded-lg bg-blue-500"></View>
                </TouchableOpacity>
                {/* Pink */}
                <TouchableOpacity className={`${filters?.colors == "pink" ? "border-2 border-green-800 rounded-lg": ""}`} onPress={()=>handleSelect("colors", "pink")}>
                  <View className="w-[50px] h-[50px] rounded-lg bg-pink-500"></View>
                </TouchableOpacity>
                {/* Gray */}
                {/* <TouchableOpacity className={`${filters?.colors == "gray" ? "border-2 border-green-800 rounded-lg": ""}`} onPress={()=>handleSelect("colors", "gray")}>
                  <View className="w-[50px] h-[50px] rounded-lg bg-gray-500"></View>
                </TouchableOpacity> */}
                {/* Black */}
                <TouchableOpacity className={`${filters?.colors == "black" ? "border-2 border-green-800 rounded-lg": ""}`} onPress={()=>handleSelect("colors", "black")}>
                  <View className="w-[50px] h-[50px] rounded-lg bg-black"></View>
                </TouchableOpacity>
              </View>
            </View>

            <View className="my-10">
                <View className="flex flex-row justify-between">
                    <TouchableOpacity onPress={handleReset} className="border border-gray-300 bg-slate-100 px-[60px] py-4 rounded-lg">
                        <Text>Reset</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleApply} className="bg-slate-800 px-[60px] py-4 rounded-lg">
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
