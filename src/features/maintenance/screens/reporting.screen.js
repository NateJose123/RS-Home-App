import React, { useState, useContext } from "react";
import { images } from "../../../../assets/index";

import {
  MaintenanceBackground,
  MaintenanceContainer,
  MaintenanceImageContainer,
  CameraButtonsContainer,
  MaintenanceImage,
  CameraButton,
  ReportTextInputContainer,
  ReportTextInput,
  KeyboardAvoider,
  KeyboardDismisser,
} from "../components/maintenance.styles.component";
import { colors } from "../../../infrastructure/theme/colors";
import { Keyboard } from "react-native";

export const ReportingScreen = ({ navigation }) => {
  const [maintenanceImage, setMaintenanceImage] = useState();

  //logic for handling camera will go here

  return (
    <KeyboardAvoider behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <MaintenanceBackground>
        <MaintenanceContainer>
          <MaintenanceImageContainer>
            <MaintenanceImage
              defaultSource={images.blank_bg}
              source={{ uri: maintenanceImage }}
            />
          </MaintenanceImageContainer>
          <CameraButtonsContainer>
            <CameraButton
              mode="contained"
              onPress={() => navigation.navigate("Camera")}
              color={colors.ui.primary}
            >
              Capture
            </CameraButton>
            <CameraButton
              mode="contained"
              onPress={() => navigation.navigate("Camera")}
              color={colors.ui.primary}
            >
              Retake
            </CameraButton>
          </CameraButtonsContainer>
          {/* Still need to implement handling of text input. */}
          <ReportTextInputContainer>
            <ReportTextInput multiline={true} />
          </ReportTextInputContainer>
        </MaintenanceContainer>
      </MaintenanceBackground>
    </KeyboardAvoider>
  );
};
