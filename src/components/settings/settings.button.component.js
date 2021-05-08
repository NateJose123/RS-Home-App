import React from "react";
import styled from "styled-components/native";
import { View, Text } from "react-native";
import { IconButton } from "react-native-paper";

const SettingsIconContainer = styled.View`
  width: 100%;
  height: 100%;
  align-items: flex-end;
`;

const SettingsButtonIcon = styled(IconButton)``;

export const SettingsButton = () => {
  return (
    <SettingsIconContainer>
      <SettingsButtonIcon icon="account-settings" size={40} />
    </SettingsIconContainer>
  );
};
