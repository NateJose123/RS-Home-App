import React from "react";
import {
  MaintenanceBackground,
  MaintenanceFeedContainer,
  MaintenanceContainer,
  ReportButtonContainer,
} from "../components/maintenance.styles.component";
import { MaintenanceInfoCard } from "../components/maintenanceinfocard.component";
import { CreateReportButton } from "../components/createreportbutton.component";

export const FeedScreen = ({ navigation }) => {
  return (
    <MaintenanceBackground>
      <MaintenanceContainer>
        <MaintenanceFeedContainer>
          <MaintenanceInfoCard />
        </MaintenanceFeedContainer>
        <ReportButtonContainer>
          <CreateReportButton nav={navigation} />
        </ReportButtonContainer>
      </MaintenanceContainer>
    </MaintenanceBackground>
  );
};
