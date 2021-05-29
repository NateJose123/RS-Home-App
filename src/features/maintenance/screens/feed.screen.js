import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import {
  MaintenanceBackground,
  MaintenanceFeedContainer,
  MaintenanceContainer,
  ReportButtonContainer,
} from "../components/maintenance.styles.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FadeInView } from "../../../components/animations/fade.animation";
import { MaintenanceInfoCard } from "../components/maintenanceinfocard.component";
import { CreateReportButton } from "../components/createreportbutton.component";
import { SettingsButton } from "../../../components/settings/settings.button.component";
import { KaizenContext } from "../../../services/cloudStorage/posts/kaizen.context";
import { MaintenanceList } from "../components/maintenancefeed.styles";
import { useFocusEffect } from "@react-navigation/native";

export const FeedScreen = ({ navigation }) => {
  const { kaizens, isLoading, error, retrieveKaizens } = useContext(
    KaizenContext
  );

  useFocusEffect(() => {
    retrieveKaizens();
  }, []);

  return (
    <MaintenanceBackground>
      <MaintenanceContainer>
        <SettingsButton nav={navigation} />
        <MaintenanceFeedContainer>
          <MaintenanceList
            data={kaizens}
            renderItem={({ item }) => {
              return (
                <FadeInView>
                  <Spacer position="bottom" size="large">
                    <MaintenanceInfoCard key={item["id"]} kaizenData={item} />
                  </Spacer>
                </FadeInView>
              );
            }}
          ></MaintenanceList>
        </MaintenanceFeedContainer>
        <ReportButtonContainer>
          <CreateReportButton nav={navigation} />
        </ReportButtonContainer>
      </MaintenanceContainer>
    </MaintenanceBackground>
  );
};
