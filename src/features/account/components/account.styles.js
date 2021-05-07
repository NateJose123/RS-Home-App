import styled from "styled-components/native";
import { Button, Avatar, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";
import { View } from "react-native";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home-bg.png"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  border-style: solid;
  border-width: 0.5px;
  shadowColor: rgb(0,0,0);
  shadowOffset: { width: 0, height: 1 };
  shadowOpacity: 0.8;
  shadowRadius: 2px;
  elevation: 5;
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const ProfilePicContainer = styled(View)`
  align-self: center;
`;

export const AuthInput = styled(TextInput)`
  width: 200px;
  height: 40px;
  justify-content: center;
  align-self: center;
  color "d8d8d8"; 
`;

export const ForgotPassword = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.caption};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.ui.textlink};
  align-self: flex-end;
`;

export const ErrorContainer = styled.View`
  max-width: 200px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const RegisterTextContainer = styled.View`
  max-width: 200px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const RegisterText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const RegisterTextLink = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.caption};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.ui.textlink};
  align-self: flex-end;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.ui.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  height: 40px;
  width: 210px;
  align-self: center;
  justify-content: center;
  border-radius: 0;
`;

export const LoginButtonText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.bg.primary};
  font-weight: bold;
`;

export const PromptText = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.secondary};
  text-transform: uppercase;
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;
