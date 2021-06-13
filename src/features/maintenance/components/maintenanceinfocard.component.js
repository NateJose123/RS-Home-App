import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { KaizenContext } from "../../../services/cloudStorage/posts/kaizen.context";
import { Button, Card, ToggleButton } from "react-native-paper";
import styled from "styled-components";
import { Text } from "react-native";
import { timestampConverter } from "../../../services/timeconversions/timestamptodate";
import { colors } from "../../../infrastructure/theme/colors";
import { MaintenanceFeedButtons } from "./maintenancefeedbuttons";

const MaintenanceCard = styled(Card)`
  width: 100%;
`;

const MaintenanceTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.h5};
  align-self: center;
`;

const MaintenanceReporter = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  align-self: center;
`;

export const MaintenanceInfoCard = ({ kaizenData = {} }) => {
  const {
    author = "Somebody",
    photoUrl = "https://picsum.photos/700",
    kaizen = "Here's a kaizen for you",
    loc = "Somewhere",
    priority = "Medium",
    status = "Incomplete",
    uid = "12345",
    datePosted = 0,
    id = "1",
  } = kaizenData;

  const [maintenanceStatus, setMaintenanceStatus] = React.useState();
  const { isLoading, error, updateKaizens } = useContext(KaizenContext);

  const maintenanceButtonHandler = (buttonStatus) => {
    kaizenData.status = buttonStatus;
    updateKaizens(id, kaizenData);
  };
  const formattedTime = timestampConverter(datePosted).toString();
  var priorityColor;
  if (priority === "Low") {
    priorityColor = "blue";
  } else if (priority === "Medium") {
    priorityColor = "#ff8000";
  } else {
    priorityColor = "red";
  }

  return (
    <MaintenanceCard>
      <MaintenanceCard.Cover source={{ uri: photoUrl }} />
      <MaintenanceCard.Content style={{ backgroundColor: { priorityColor } }}>
        <MaintenanceTitle>{loc}</MaintenanceTitle>
        <MaintenanceReporter>
          {author} - {formattedTime}
        </MaintenanceReporter>
      </MaintenanceCard.Content>
    </MaintenanceCard>
  );
};
