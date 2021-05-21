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
  apiKey: "AIzaSyBDls_X5TC76JzcZfclbFH7AD35wn9UyPo",
  authDomain: "rs-home-app-e67fa.firebaseapp.com",
  projectId: "rs-home-app-e67fa",
  storageBucket: "rs-home-app-e67fa.appspot.com",
  messagingSenderId: "929748852511",
  appId: "1:929748852511:web:974ab30f0d034bee085a2a",
  databaseURL: "https://rs-home-app-e67fa-default-rtdb.firebaseio.com/",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

var storage = firebase.storage();
var database = firebase.database();

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
