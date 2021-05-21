import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../../features/home/screens/home.screen";
import { SettingsNavigator } from "./settings.navigator";

const HomeStack = createStackNavigator();

export const HomeNavigator = () => (
  <HomeStack.Navigator headerMode="none">
    <HomeStack.Screen name="Main" component={HomeScreen} />
    <HomeStack.Screen name="Settings" component={SettingsNavigator} />
  </HomeStack.Navigator>
);
