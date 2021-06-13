import React, { useState, useContext, createContext, useEffect } from "react";
import * as firebase from "firebase";
import { unstable_batchedUpdates } from "react-native";

export const KaizenContext = createContext();

export const KaizenContextProvider = ({ children }) => {
  const [kaizens, setKaizens] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentKaizen, setCurrentKaizen] = useState();

  const updateKaizens = (postId, updatedData) => {
    var updates = {};
    updates["maintenancePosts/" + postId] = updatedData;
    console.log(updatedData);
    firebase.database().ref().update(updates);
  };

  const retrieveKaizens = () => {
    setIsLoading(true);
    setTimeout(() => {
      var KaizenRef = firebase.database().ref("maintenancePosts/");
      KaizenRef.on("value", (snapshot) => {
        const newKaizenData = snapshot.val();
        const kaizenData = [];
        Object.values(newKaizenData).map((value) => {
          if (value.status === "In-Progress") {
            kaizenData.push(value);
          }
        });
        setKaizens(kaizenData);
      });
    }, 2000);
    setIsLoading(false);
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
        updateKaizens,
        currentKaizen,
        setCurrentKaizen,
      }}
    >
      {children}
    </KaizenContext.Provider>
  );
};
