import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { useFonts as useJost, Jost_400Regular } from "@expo-google-fonts/jost";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

var firebaseConfig = {
  apiKey: "AIzaSyBJvtuHuSbYLg4mBGGx7CjJhrqDonwZxNc",
  authDomain: "mealstogo-df9bb.firebaseapp.com",
  projectId: "mealstogo-df9bb",
  storageBucket: "mealstogo-df9bb.appspot.com",
  messagingSenderId: "116121312870",
  appId: "1:116121312870:web:48170fccd2a1f6ef9a97a7",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [jostLoaded] = useJost({
    Jost_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded || !jostLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
