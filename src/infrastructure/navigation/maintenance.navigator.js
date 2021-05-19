import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../../features/home/screens/home.screen.component";
import { SettingsNavigator } from "./settings.navigator";

const MaintenanceStack = createStackNavigator();

export const HomeNavigator = () => (
  <MaintenanceStack.Navigator headerMode="none">
    <MaintenanceStack.Screen name="Feed" component={HomeScreen} />
    <MaintenanceStack.Screen name="Reporting" component={SettingsNavigator} />
  </MaintenanceStack.Navigator>
);
