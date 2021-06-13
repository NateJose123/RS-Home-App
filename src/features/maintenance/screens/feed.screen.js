import React, { useContext } from "react";
import { Touchable, TouchableOpacity } from "react-native";
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
import { KaizenContext } from "../../../services/cloudStorage/posts/kaizen.context";
import { MaintenanceList } from "../components/maintenancefeed.styles";
import { useFocusEffect } from "@react-navigation/native";
import styled from "styled-components/native";
import { IconButton } from "react-native-paper";

const SettingsIconContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const SettingsButtonIcon = styled(IconButton)``;

export const FeedScreen = ({ navigation }) => {
  const {
    kaizens,
    isLoading,
    error,
    retrieveKaizens,
    setCurrentKaizen,
    currentKaizen,
  } = useContext(KaizenContext);

  useFocusEffect(() => {
    retrieveKaizens();
  }, []);

  const SettingsButton = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <SettingsIconContainer>
          <SettingsButtonIcon icon="cog-outline" size={50} />
        </SettingsIconContainer>
      </TouchableOpacity>
    );
  };

  return (
    <MaintenanceBackground>
      <MaintenanceContainer>
        <MaintenanceFeedContainer>
          <MaintenanceList
            data={kaizens}
            renderItem={({ item, index }) => {
              return (
                <FadeInView>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      setCurrentKaizen(item);
                      navigation.navigate("MaintenanceDetail");
                    }}
                  >
                    <Spacer position="bottom" size="large">
                      <MaintenanceInfoCard kaizenData={item} nav={navigation} />
                    </Spacer>
                  </TouchableOpacity>
                </FadeInView>
              );
            }}
          ></MaintenanceList>
        </MaintenanceFeedContainer>
        <ReportButtonContainer>
          <CreateReportButton nav={navigation} />
          <SettingsIconContainer>
            <SettingsButton />
          </SettingsIconContainer>
        </ReportButtonContainer>
      </MaintenanceContainer>
    </MaintenanceBackground>
  );
};
