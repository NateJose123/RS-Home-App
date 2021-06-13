import React from "react";
import styled from "styled-components/native";
import {
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Text,
  View,
  FlatList,
} from "react-native";
import { Button, TextInput, ToggleButton } from "react-native-paper";

export const MaintenanceButtonsContainer = styled.View`
  flex: 1;
  width: 80%;
  margin-left: ${(props) => props.theme.space[2]};
  margin-right: ${(props) => props.theme.space[2]};
  align-self: center;
  align-items: center;
  justify-content: center;
`;

export const MaintenanceButton = styled(ToggleButton)`
  width: 30%;
`;

export const MaintenanceFeedButtons = (props) => {
  return (
    <MaintenanceButtonsContainer>
      <MaintenanceButton.Row
        onValueChange={(value) => props.updateMaintenanceCard(value)}
        value="In-progress"
      >
        <MaintenanceButton icon="close" value="Cancel" />
        <MaintenanceButton icon="check" value="Complete" />
      </MaintenanceButton.Row>
    </MaintenanceButtonsContainer>
  );
};
