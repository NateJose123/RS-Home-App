import React, { useState, useContext } from "react";

import { ActivityIndicator, Colors } from "react-native-paper";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthInput,
  AuthInputContainer,
  AuthButton,
  ErrorContainer,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const {
    onResetPassword,
    isLoading,
    error,
    isEmailSent,
    resetState,
  } = useContext(AuthenticationContext);

  const goBack = (navigation) => {
    resetState();
    navigation.goBack();
  };

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInputContainer>
          <AuthInput
            placeholder="E-mail"
            textAlign="center"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
          />
        </AuthInputContainer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        {isEmailSent && (
          <ErrorContainer size="large">
            <Text variant="hint">Email Sent Successfully!</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          <AuthButton mode="contained" onPress={() => onResetPassword(email)}>
            Submit
          </AuthButton>
        </Spacer>
        <Spacer size="large">
          <AuthButton mode="contained" onPress={() => goBack(navigation)}>
            Back
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
