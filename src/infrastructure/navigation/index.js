import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AccountNavigator } from "./account.navigator";

import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { MaintenanceNavigator } from "./maintenance.navigator";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <MaintenanceNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
