import * as React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import styled from "styled-components";

const MaintenanceCard = styled(Card)`
  width: 100%;
`;

export const MaintenanceInfoCard = () => (
  <MaintenanceCard>
    <MaintenanceCard.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </MaintenanceCard.Content>
    <MaintenanceCard.Cover source={{ uri: "https://picsum.photos/700" }} />
    <MaintenanceCard.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </MaintenanceCard.Actions>
  </MaintenanceCard>
);
