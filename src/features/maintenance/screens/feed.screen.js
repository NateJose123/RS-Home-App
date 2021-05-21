import React from "react";
import { CreateReportButton } from "../components/createreportbutton.component";
import {
  MaintenanceBackground,
  MaintenanceFeedContainer,
  MaintenanceContainer,
  ReportButtonContainer,
} from "../components/maintenance.styles.component";
import { MaintenanceInfoCard } from "../components/maintenanceinfocard.component";

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
