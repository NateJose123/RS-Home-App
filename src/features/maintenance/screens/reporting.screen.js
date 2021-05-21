import React, { useState, useContext } from "react";
import { images } from "../../../../assets/index";
import { View, Text } from "react-native";
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
  LocationTextContainer,
  LocationTextInput,
  PriorityButtonsContainer,
  PriorityButton,
  LowPriority,
  MediumPriority,
  HighPriority,
} from "../components/maintenance.styles.component";
import { colors } from "../../../infrastructure/theme/colors";

export const ReportingScreen = ({ navigation }) => {
  const [maintenanceImage, setMaintenanceImage] = useState();
  const [priority, setPriority] = useState("low");

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
          <LocationTextContainer>
            <LocationTextInput />
          </LocationTextContainer>
          <PriorityButtonsContainer>
            <PriorityButton.Row
              onValueChange={(value) => setPriority(value)}
              value={priority}
            >
              <PriorityButton icon={LowPriority} value="left" />
              <PriorityButton icon={MediumPriority} value="right" />
              <PriorityButton icon={HighPriority} value="right" />
            </PriorityButton.Row>
          </PriorityButtonsContainer>
        </MaintenanceContainer>
      </MaintenanceBackground>
    </KeyboardAvoider>
  );
};
