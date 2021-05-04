import React from "react";
import { Dashboard, Place } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNav from "./navigation/BottomTabNav";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Testing"}
      >
        <Stack.Screen name="MainApp" component={BottomTabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
