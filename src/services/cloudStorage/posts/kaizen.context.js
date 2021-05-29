import React, { useState, useContext, createContext, useEffect } from "react";
import * as firebase from "firebase";

export const KaizenContext = createContext();

export const KaizenContextProvider = ({ children }) => {
  const [kaizens, setKaizens] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveKaizens = () => {
    setIsLoading(true);
    setTimeout(() => {
      var KaizenRef = firebase.database().ref("maintenancePosts/");
      KaizenRef.on("value", (snapshot) => {
        const newKaizenData = snapshot.val();
        const kaizenData = [];
        Object.values(newKaizenData).map((value) => {
          kaizenData.push(value);
        });
        setKaizens(kaizenData);
      });
    }, 2000);
  };

  useEffect(() => {
    retrieveKaizens();
  }, []);

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
