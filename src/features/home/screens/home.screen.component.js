import React, { useContext } from "react";
import { HomeBackground } from "../components/home.styles";
import { Button } from "react-native";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const HomeScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <HomeBackground>
      <Button title="Log Out" icon="door" mode="contained" onPress={onLogout}>
        Log Out
      </Button>
    </HomeBackground>
  );
};
