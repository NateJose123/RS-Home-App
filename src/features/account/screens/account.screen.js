import React, { useState, useContext } from "react";
import { Avatar } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";
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
  AuthInputContainer,
  ErrorContainer,
} from "../components/account.styles";
import { TouchableOpacity } from "react-native";

export const AccountScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading, resetState } = useContext(
    AuthenticationContext
  );

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <Spacer>
          <ProfilePicContainer>
            <Avatar.Icon
              size={130}
              backgroundColor="#d8d8d8"
              style={{ borderColor: "black", borderWidth: 0.5 }}
            />
          </ProfilePicContainer>
        </Spacer>
        <Spacer size="large" />
        <Spacer size="large">
          <AuthInputContainer>
            <AuthInput
              placeholder="EMAIL"
              value={email}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(u) => setEmail(u)}
              mode="outlined"
              textAlign="center"
            />
          </AuthInputContainer>
        </Spacer>
        <Spacer size="medium" />
        <Spacer size="medium">
          <AuthInputContainer>
            <AuthInput
              placeholder="PASSWORD"
              value={password}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(p) => setPassword(p)}
              mode="outlined"
              textAlign="center"
            />
          </AuthInputContainer>
        </Spacer>
        <Spacer size="large" />
        <TouchableOpacity
          onPress={() => {
            resetState();
            navigation.navigate("ForgotPassword");
          }}
        >
          <ForgotPassword>Forgot Password?</ForgotPassword>
        </TouchableOpacity>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large" />
        <AuthButton
          mode="contained"
          onPress={() => {
            resetState();
            onLogin(email, password);
          }}
        >
          <LoginButtonText>Login</LoginButtonText>
        </AuthButton>
        <Spacer size="large" />
        <RegisterTextContainer>
          <RegisterText>Don't have an account?</RegisterText>
          <TouchableOpacity
            onPress={() => {
              resetState();
              navigation.navigate("Register");
            }}
          >
            <RegisterTextLink>Sign Up</RegisterTextLink>
          </TouchableOpacity>
        </RegisterTextContainer>
      </AccountContainer>
    </AccountBackground>
  );
};
