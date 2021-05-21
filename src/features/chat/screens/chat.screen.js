import React from "react";
import { View, Text } from "react-native";

export const ChatScreen = ({ navigation }) => {
  return (
      <View style = {{justifyContent:'center', flex: 1}}>
          <Text style = {{alignSelf:'center'}}>{"Haio This is Chat"}</Text>
      </View>
  );
};
