import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components";

const MaintenanceCard = styled(Card)`
  width: 100%;
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
  } = kaizenData;
  return (
    <MaintenanceCard>
      <MaintenanceCard.Cover source={{ uri: photoUrl }} />
      <MaintenanceCard.Content>
        <Title>{loc}</Title>
        <Paragraph>{kaizen}</Paragraph>
      </MaintenanceCard.Content>
      <MaintenanceCard.Actions>
        <Button>Cancel</Button>
        <Button>Ok</Button>
      </MaintenanceCard.Actions>
    </MaintenanceCard>
  );
};
