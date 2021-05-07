import React, { useState, useContext } from "react";
import { Avatar } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  ProfilePic,
  AuthInput,
  ForgotPassword,
  RegisterTextContainer,
  RegisterText,
  RegisterTextLink,
  ProfilePicContainer,
  LoginButtonText,
  PromptText,
} from "../components/account.styles";
import { TouchableOpacity } from "react-native";

export const AccountScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Spacer>
          <ProfilePicContainer>
            <Avatar.Icon size={140} backgroundColor="#d8d8d8" />
          </ProfilePicContainer>
        </Spacer>
        <Spacer size="large">
          <AuthInput
            label="Email"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
            mode="outlined"
          />
        </Spacer>
        <Spacer size="medium">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
            mode="outlined"
          />
        </Spacer>
        <Spacer size="large" />
        <TouchableOpacity>
          <ForgotPassword>Forgot Password?</ForgotPassword>
        </TouchableOpacity>
        <Spacer size="large" />
        <AuthButton mode="contained" onPress={() => onLogin(email, password)}>
          <LoginButtonText>Login</LoginButtonText>
        </AuthButton>
        <Spacer size="large" />
        <RegisterTextContainer>
          <RegisterText>Dont' have an account?</RegisterText>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <RegisterTextLink>Sign Up</RegisterTextLink>
          </TouchableOpacity>
        </RegisterTextContainer>
      </AccountContainer>
    </AccountBackground>
  );
};
