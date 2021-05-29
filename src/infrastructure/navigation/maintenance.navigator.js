import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { FeedScreen } from "../../features/maintenance/screens/feed.screen";
import { SettingsNavigator } from "./settings.navigator";
import { ReportingScreen } from "../../features/maintenance/screens/reporting.screen";
import { CameraScreen } from "../../features/maintenance/screens/camera.screen";
import { KaizenContextProvider } from "../../services/cloudStorage/posts/kaizen.context";

const MaintenanceStack = createStackNavigator();

//creating a modal style animation for specific screens
export const verticalAnimation = {
  gestureDirection: "vertical",
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
        ],
      },
    };
  },
};

export const MaintenanceNavigator = () => {
  return (
    <KaizenContextProvider>
      <MaintenanceStack.Navigator headerMode="none">
        <MaintenanceStack.Screen name="Feed" component={FeedScreen} />
        <MaintenanceStack.Screen
          name="Reporting"
          component={ReportingScreen}
          options={verticalAnimation}
        />
        <MaintenanceStack.Screen name="Camera" component={CameraScreen} />
        <MaintenanceStack.Screen
          name="Settings"
          component={SettingsNavigator}
        />
      </MaintenanceStack.Navigator>
    </KaizenContextProvider>
  );
};
