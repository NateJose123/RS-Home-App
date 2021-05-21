import React from "react";
import styled from "styled-components/native";
import {
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Text,
  View,
} from "react-native";
import { Button, TextInput, ToggleButton } from "react-native-paper";

export const MaintenanceBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home-bg.png"),
})`
  flex: 1;
`;
export const KeyboardAvoider = styled(KeyboardAvoidingView)`
  flex: 1;
`;

export const KeyboardDismisser = styled(TouchableWithoutFeedback)``;

export const MaintenanceContainer = styled.View`
  flex: 1
  flex-wrap: wrap;
  border-color: blue;
  border-width: 5px;
  align-content: center;
`;

export const ReportButtonContainer = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: center;
  border-color: green;
  border-width: 5px;
`;

export const MaintenanceFeedContainer = styled.View`
  flex:6
  width: 100%
  border-color: black;
  border-width: 5px;
  margin-top: ${(props) => props.theme.space[4]};
`;

export const MaintenanceImageContainer = styled.View`
  flex: 3;
  width: 80%;
  margin-top: ${(props) => props.theme.space[4]};
  margin-left: ${(props) => props.theme.space[2]};
  margin-right: ${(props) => props.theme.space[2]};
  align-self: center;
  border-color: black;
  border-width: 5px;
`;

export const MaintenanceImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export const CameraButtonsContainer = styled.View`
  width: 80%;
  flex: 1;
  flex-direction: row;
  align-self: center;
  justify-content: center
  border-color: black;
  border-width: 5px;
`;

export const CameraButton = styled(Button)`
margin-top: ${(props) => props.theme.space[1]}
margin-left: ${(props) => props.theme.space[2]}
margin-right: ${(props) => props.theme.space[2]}
justify-content: center;
height: 90%;
width: 49%;
border-radius:0px;
`;

export const ReportTextInputContainer = styled.View`
  flex: 1;
  width: 80%;
  margin-bottom: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[2]};
  margin-left: ${(props) => props.theme.space[2]};
  margin-right: ${(props) => props.theme.space[2]};
  align-self: center;
  border-color: black;
  border-width: 5px;
`;

export const ReportTextInput = styled(TextInput)`
  flex: 1;
  width: 100%;
  align-self: center;
  border-width: 1px;
  border-radius: 0px;
  border-color: ${(props) => props.theme.colors.ui.border};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.textEntry};
`;

export const LocationTextContainer = styled.View`
  flex: 1;
  width: 80%;
  margin-bottom: ${(props) => props.theme.space[2]};
  margin-left: ${(props) => props.theme.space[2]};
  margin-right: ${(props) => props.theme.space[2]};
  align-self: center;
  border-color: black;
  border-width: 5px;
`;

export const LocationTextInput = styled(TextInput)`
  flex: 1;
  width: 100%;
  align-self: center;
  border-width: 1px;
  border-radius: 0px;
  border-color: ${(props) => props.theme.colors.ui.border};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.textEntry};
`;

export const PriorityButtonsContainer = styled.View`
  flex: 1;
  width: 80%;
  margin-bottom: ${(props) => props.theme.space[2]};
  margin-left: ${(props) => props.theme.space[2]};
  margin-right: ${(props) => props.theme.space[2]};
  align-self: center;
  align-items: center;
  border-color: black;
  border-width: 5px;
`;

export const PriorityButton = styled(ToggleButton)`
  width: 30%;
`;

export const LowPriority = () => (
  <View>
    <Text style={{ color: "blue" }}>Low Priority</Text>
  </View>
);

export const MediumPriority = () => (
  <View>
    <Text style={{ color: "#ff8000" }}>Medium Priority</Text>
  </View>
);

export const HighPriority = () => (
  <View>
    <Text style={{ color: "red" }}>High Priority</Text>
  </View>
);
