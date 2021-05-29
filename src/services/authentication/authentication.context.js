import React, { useState, createContext } from "react";
import * as firebase from "firebase";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isEmailSent, setIsEmailSent] = useState(false);

  firebase.auth().onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const resetState = () => {
    setIsLoading(false);
    setError(null);
    setIsEmailSent(false);
  };

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (email, password, repeatedPassword, userName) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((u) => {
        setUser(u);
        firebase
          .auth()
          .currentUser.updateProfile({
            displayName: userName,
          })
          .then()
          .catch((error) => console.log(error));
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onResetPassword = (email) => {
    setIsLoading(true);
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function () {
        setIsLoading(false);
        setIsEmailSent(true);
        return true;
      })
      .catch(function (error) {
        setIsLoading(false);
        setError(error.toString());
        console.log(error);
      });
  };

  const onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
        setError(null);
      });
  };

  const requestUserDetails = () => {
    let userInfo;
    firebase.auth().currentUser.providerData.forEach((profile) => {
      userInfo = {
        userId: profile.uid,
        userName: profile.displayName,
        email: profile.email,
        profilePic: profile.photoURL,
      };
    });
    return userInfo;
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        isEmailSent,
        onLogin,
        onRegister,
        onLogout,
        onResetPassword,
        resetState,
        requestUserDetails,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
