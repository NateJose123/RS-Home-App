import React, { useContext } from "react";
import { HomeBackground } from "../components/home.styles.component";
import { Button } from "react-native";
import { SettingsButton } from "../../../components/settings/settings.button.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const HomeScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <HomeBackground>
      <SettingsButton nav={navigation} />
    </HomeBackground>
  );
};
