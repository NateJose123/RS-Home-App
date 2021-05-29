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

export const MaintenanceList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
