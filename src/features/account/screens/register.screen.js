import React, { useState, useContext } from "react";

import { ActivityIndicator, Colors } from "react-native-paper";

import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  AuthInputContainer,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const RegisterScreen = ({ navigation }) => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, isLoading, error, resetState } = useContext(
    AuthenticationContext
  );

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
            textAlign="center"
            placeholder="Name"
            value={userName}
            autoCapitalize="none"
            mode="outlined"
            onChangeText={(u) => setUsername(u)}
          />
        </AuthInputContainer>
        <Spacer size="large"></Spacer>
        <AuthInputContainer>
          <AuthInput
            textAlign="center"
            placeholder="E-mail"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            mode="outlined"
            onChangeText={(u) => setEmail(u)}
          />
        </AuthInputContainer>
        <Spacer size="large">
          <AuthInputContainer>
            <AuthInput
              textAlign="center"
              placeholder="Password"
              value={password}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              mode="outlined"
              onChangeText={(p) => setPassword(p)}
            />
          </AuthInputContainer>
        </Spacer>
        <Spacer size="large">
          <AuthInputContainer>
            <AuthInput
              textAlign="center"
              placeholder="Repeat Password"
              value={repeatedPassword}
              textContentType="password"
              secureTextEntry
              autoCapitalize="none"
              mode="outlined"
              onChangeText={(p) => setRepeatedPassword(p)}
            />
          </AuthInputContainer>
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          {!isLoading ? (
            <AuthButton
              icon="email"
              mode="contained"
              onPress={() =>
                onRegister(email, password, repeatedPassword, userName)
              }
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => goBack(navigation)}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
