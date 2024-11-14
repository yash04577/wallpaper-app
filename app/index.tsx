import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  StatusBar as RNStatusBar,
  Platform,
  StyleSheet,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import "../global.css";
import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { FlashList, MasonryFlashList } from "@shopify/flash-list";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { getImagesAsynch, resetData } from "@/redux/imageSlice";
import { useSelector } from "react-redux";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
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
  const data = useSelector((state: any) => state?.images.data);

  const [query, setQuery] = useState({
    page: 1,
    search: "",
    category: "",
    image_type: "",
    order: "",
    colors: "",
    orientation: "",
  });

  useEffect(() => {
    // console.log("query updated ", query);

    if (query.page == 1) {
      dispatch(resetData());
    }
    dispatch(getImagesAsynch(query));
  }, [query]);

  const handleCategory = (value: string) => {
    if (query.category == value) {
      setQuery({
        page: 1,
        search: "",
        category: "",
        image_type: "",
        order: "",
        colors: "",
        orientation: "",
      });
    } else {
      setQuery({
        page: 1,
        search: "",
        category: value,
        image_type: "",
        order: "",
        colors: "",
        orientation: "",
      });
    }
  };

  const [showFilter, setShowFilter] = useState<boolean>(false);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0,
      }}
      className={`h-screen w-screen flex bg-[#efefef]`}
    >
      <View className="w-[90%] mx-auto">
        {/* header start here */}
        <View className="flex flex-row justify-between mt-5">
          <Text className="text-3xl font-semibold">Pixels</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("filter", { query, setQuery})}
          >
            <FontAwesome6 name="bars-staggered" size={24} color="black" />
          </TouchableOpacity>
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
            onChangeText={(text) =>
              setQuery({
                page: 1,
                search: text,
                category: "",
                colors: "",
                image_type: "",
                order: "",
                orientation: "",
              })
            }
          />
        </View>

        {/* filters start here */}
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {category?.map((value: any) => (
              <TouchableOpacity
                onPress={() => handleCategory(value)}
                className={`rounded-lg ${
                  query.category == value ? "bg-slate-500" : "bg-white"
                } py-2 px-4 mr-2 capitalize`}
              >
                <Text
                  className={`${query.category == value ? "text-white" : ""}`}
                >
                  {value}
                </Text>
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
                <TouchableOpacity
                  onPress={() =>
                    router.push({ pathname: "/image", params: item })
                  }
                >
                  <Image
                    source={{ uri: item?.webformatURL }}
                    height={item?.webformatHeight}
                    width={deviceWidth / 2 - 25}
                    className="rounded-lg mb-2"
                  />
                </TouchableOpacity>
              </View>
            )}
            estimatedItemSize={200}
          />
        </View>
      </View>
      {/* </BottomSheet> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
});
