import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Stack } from "expo-router";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";

const _layout = () => {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen
            name="image"
            options={{ headerShown: false, presentation: "transparentModal", animation: "simple_push" }}
          />
          <Stack.Screen
            name="filter"
            options={{ headerShown: false, presentation: "transparentModal", animation: "slide_from_bottom" }}
          />
        </Stack>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default _layout;
