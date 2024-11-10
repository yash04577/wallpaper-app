import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import "../global.css";
import { useState, useEffect } from "react";
import { FlashList, MasonryFlashList } from "@shopify/flash-list";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { getImagesAsynch, resetData } from "@/redux/imageSlice";
import { useSelector } from "react-redux";

export default function HomeScreen() {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState([
    "backgrounds",
    "fashion",
    "nature",
    "science",
    "education",
    "feelings",
    "health",
    "people",
    "religion",
    "places",
    "animals",
    "industry",
    "computer",
    "food",
    "sports",
    "transportation",
    "travel",
    "buildings",
    "business",
    "music",
  ]);


  const deviceWidth = Dimensions.get("window").width;
  const router = useRouter();
  const dispatch = useDispatch();
  const data = useSelector((state:any)=>state?.images.data)

  const [query, setQuery] = useState({
    page: 1,
    search: "",
  })

  useEffect(()=>{

    console.log("query updated ", query)

    if(query.page == 1){
      dispatch(resetData());
    }
     dispatch(getImagesAsynch(query));
  },[query])


  return (
    <View className="h-screen w-screen flex bg-[#efefef]">
      <View className="w-[90%] mx-auto">
        {/* header start here */}
        <View className="flex flex-row justify-between mt-5">
          <Text className="text-3xl font-semibold">Pixels</Text>
          <FontAwesome6 name="bars-staggered" size={24} color="black" />
        </View>

        {/* searchbar starts here */}
        <View className="relative my-5">
          <Feather
            name="search"
            style={{ color: "#dddddd" }}
            className="absolute left-[10px] top-[15px] color-[#efefef] z-10"
            size={24}
            color="black"
          />
          <TextInput
            placeholder="Search for photos..."
            className="bg-white rounded-lg h-[50px] placeholder:pl-[40px]"
            onChangeText={(text)=> setQuery({page:1, search:text})}
          />
        </View>

        {/* filters start here */}
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {category?.map((value: any) => (
              <TouchableOpacity className="rounded-lg bg-white py-2 px-4 mr-2">
                <Text>{value}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* images starts here */}
        <View className="my-5 flex h-[78%] w-full">
          <MasonryFlashList
            data={data}
            numColumns={2} 
            onEndReached={()=> setQuery((prev)=>({
              ...prev,
              page: prev.page+1
            }))}
            onEndReachedThreshold={1}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View className="">
                <TouchableOpacity onPress={()=> router.push({pathname: "/image", params: item})}>

                <Image
                  source={{ uri: item?.previewURL }}
                  height={item?.previewHeight}
                  width={deviceWidth / 2 - 25 }
                  className="rounded-lg mb-2"
                  />
                  </TouchableOpacity>
              </View>
            )}
            estimatedItemSize={200}
          />
        </View>

        {/* <View className='my-5 flex'>
          <FlatList 
            data={data}      
            numColumns={2}
            className='flex gap-4' 
            columnWrapperStyle={{ justifyContent: 'space-between' }} 
            renderItem={({item}) => <View className=''>
              <Image 
                source={{uri: item?.previewURL}} 
                height={item?.previewHeight} 
                width={(deviceWidth/2) - 30} 
                // width={item?.previewWidth} 
                className='rounded-lg my-2'
              />
            </View> }    
          />
        </View> */}

        {/* <View className="my-5 flex">
          <MasonryList
            // images={data?.map((item) => ({
            //   uri: item.previewURL,
            //   height: item.previewHeight,
            //   width: item.previewWidth,
            // }))}
           
            columns={2} // Number of columns
            spacing={8} // Adjusts the gap between images
            imageContainerStyle={{ borderRadius: 10, marginVertical: 8 }}
            className="border-2 border-red-400"
          />
        </View> */}
      </View>
    </View>
  );
}
