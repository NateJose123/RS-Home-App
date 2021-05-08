import React, { useContext } from "react";
import { HomeBackground } from "../components/home.styles";
import { Button } from "react-native";
import { SettingsButton } from "../../../components/settings/settings.button.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { TouchableOpacity } from "react-native";

export const HomeScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <HomeBackground>
      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <SettingsButton />
      </TouchableOpacity>
      {/* <Button title="Log Out" icon="door" mode="contained" onPress={onLogout}>
        Log Out
      </Button> */}
    </HomeBackground>
  );
};
