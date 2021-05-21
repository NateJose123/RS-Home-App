import React from "react";
import styled from "styled-components/native";
import { IconButton } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { colors } from "../../../infrastructure/theme/colors";

const ReportButtonIcon = styled(IconButton)``;

export const CreateReportButton = (props) => {
  return (
    <TouchableOpacity onPress={() => props.nav.navigate("Reporting")}>
      <ReportButtonIcon
        icon="plus-circle"
        size={70}
        color={colors.ui.primary}
      />
    </TouchableOpacity>
  );
};
