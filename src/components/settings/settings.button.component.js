import React from "react";
import styled from "styled-components/native";
import { View, Text, TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";

const SettingsIconContainer = styled.View`
  margin-top: 10px;
  width: 100%;
  height: 10%;
  align-items: flex-end;
`;

const SettingsButtonIcon = styled(IconButton)``;

export const SettingsButton = (props) => {
  return (
    <TouchableOpacity onPress={() => props.nav.navigate("Settings")}>
      <SettingsIconContainer>
        <SettingsButtonIcon icon="account-settings" size={40} />
      </SettingsIconContainer>
    </TouchableOpacity>
  );
};
