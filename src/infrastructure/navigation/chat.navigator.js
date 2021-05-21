import React, { useContext, useEffect } from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { ChatScreen } from "../../features/chat/screens/chat.screen"

const ChatStack = createStackNavigator();
export const ChatNavigator = ({ route, navigation }) => {
  return (
    <ChatStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <ChatStack.Screen
        options={{ header: () => null }}
        name="Chat"
        component={ChatScreen}
      />
    </ChatStack.Navigator>
  );
};
