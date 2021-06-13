import React, { useContext } from "react";
import { KaizenContext } from "../../../services/cloudStorage/posts/kaizen.context";
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
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { images } from "../../../../assets/index";

export const MaintenanceDetailScreen = () => {
  const { setCurrentKaizen, currentKaizen } = useContext(KaizenContext);
  return (
    <MaintenanceContainer>
      <MaintenanceImageContainer>
        <MaintenanceImage
          defaultSource={images.blank_bg}
          source={{ uri: currentKaizen.photoUrl }}
        />
      </MaintenanceImageContainer>
      <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
      </Card>
    </MaintenanceContainer>
  );
};
