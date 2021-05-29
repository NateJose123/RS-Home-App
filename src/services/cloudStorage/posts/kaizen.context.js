import React, { useState, useContext, createContext, useEffect } from "react";
import * as firebase from "firebase";

export const KaizenContext = createContext();

export const KaizenContextProvider = ({ children }) => {
  const [kaizens, setKaizens] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveKaizens = () => {
    setIsLoading(true);
    setTimeout(() => {
      var KaizenRef = firebase.database().ref("maintenancePosts/");
      KaizenRef.on("value", (snapshot) => {
        setKaizens(snapshot.val());
      });
    }, 2000);
    console.log(kaizens);
  };

  return (
    <KaizenContext.Provider
      value={{
        kaizens,
        isLoading,
        error,
        retrieveKaizens,
      }}
    >
      {children}
    </KaizenContext.Provider>
  );
};
