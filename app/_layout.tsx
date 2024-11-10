import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import store from "@/redux/store";
import { Provider } from "react-redux";

const _layout = () => {
  return (
    
    <GestureHandlerRootView>
        <Provider store={store}>

        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="image"
            options={{ headerShown: false, presentation: "transparentModal" }}
            />
        </Stack>
            </Provider>
    </GestureHandlerRootView>
  );
};

export default _layout;
