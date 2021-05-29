import React from "react";
import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { colors } from "../../../infrastructure/theme/colors";

const ReportButton = styled(Button)`
  flex: 0.9;
  width: 100%;
  justify-content: center;
`;

export const CreateReportButton = (props) => {
  return (
    <TouchableOpacity onPress={() => props.nav.navigate("Reporting")}>
      <ReportButton mode="contained" color={colors.ui.primary}>
        Create Kaizen
      </ReportButton>
    </TouchableOpacity>
  );
};
