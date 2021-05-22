import React, { useState, useContext } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PostKaizen } from "../../../services/cloudStorage/posts/kaizen.post";
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
  PriorityTitle,
  KaizenButtonsContainer,
  KaizenButton,
} from "../components/maintenance.styles.component";
import { colors } from "../../../infrastructure/theme/colors";
import { Keyboard } from "react-native";

export const ReportingScreen = ({ navigation }) => {
  const [maintenanceImage, setMaintenanceImage] = useState();
  const [kaizen, setKaizen] = useState("");
  const [location, setLocation] = useState("");
  const [priority, setPriority] = useState("low");

  const getMaintenancePicture = async (currentUser) => {
    const localMaintenanceUri = await AsyncStorage.getItem(
      `${currentUser.uid}-maintenancephotoimg`
    );
    setMaintenanceImage(localMaintenanceUri);
  };

  const { onLogout, user } = useContext(AuthenticationContext);

  useFocusEffect(() => {
    getMaintenancePicture(user);
  }, [user]);

  return (
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
            Take Photo
          </CameraButton>
        </CameraButtonsContainer>
        {/* Still need to implement handling of text input. */}
        <ReportTextInputContainer>
          <ReportTextInput
            multiline={true}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
            label="Kaizen"
            value={kaizen}
            onChangeText={(text) => setKaizen(text)}
            required
          />
        </ReportTextInputContainer>
        <KeyboardAvoider
          behavior={Platform.OS === "ios" ? "padding" : "padding"}
        >
          <LocationTextContainer>
            <LocationTextInput
              placeholder="Location"
              value={location}
              onChangeText={(text) => setLocation(text)}
            />
          </LocationTextContainer>
        </KeyboardAvoider>
        <PriorityButtonsContainer>
          <PriorityTitle>Priority</PriorityTitle>
          <PriorityButton.Row
            onValueChange={(value) => setPriority(value)}
            value={priority}
          >
            <PriorityButton icon={LowPriority} value="low" />
            <PriorityButton icon={MediumPriority} value="medium" />
            <PriorityButton icon={HighPriority} value="high" />
          </PriorityButton.Row>
        </PriorityButtonsContainer>
        <KaizenButtonsContainer>
          <KaizenButton
            mode="contained"
            onPress={() =>
              PostKaizen(maintenanceImage, kaizen, location, priority)
            }
            color={colors.ui.primary}
          >
            Kaizen
          </KaizenButton>
          <KaizenButton
            mode="contained"
            onPress={() => navigation.navigate("Feed")}
            color={colors.ui.secondary}
          >
            Go Back
          </KaizenButton>
        </KaizenButtonsContainer>
      </MaintenanceContainer>
    </MaintenanceBackground>
  );
};
