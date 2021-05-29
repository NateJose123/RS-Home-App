import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components";

const MaintenanceCard = styled(Card)`
  width: 100%;
`;

export const MaintenanceInfoCard = ({ kaizenData = {} }) => {
  const {
    author = "Somebody",
    photoUrl = "",
    kaizen = "Here's a kaizen for you",
    loc = "",
    priority = "",
    status = "",
    uid = "",
  } = kaizenData;
  console.log(kaizenData);
  return (
    <MaintenanceCard>
      <MaintenanceCard.Content>
        <Title>{loc}</Title>
        <Paragraph>{kaizen}</Paragraph>
      </MaintenanceCard.Content>
      <MaintenanceCard.Cover source={{ uri: "https://picsum.photos/700" }} />
      <MaintenanceCard.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </MaintenanceCard.Actions>
    </MaintenanceCard>
  );
};
