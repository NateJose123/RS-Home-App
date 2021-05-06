import styled from "styled-components/native";
import { Button, TextInput, Avatar } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";
import { fonts } from "../../../infrastructure/theme/fonts";

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

export const ProfilePic = styled(Avatar.Image).attrs({})`
  align-self: center;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.ui.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  width: 250px;
  align-self: center;
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
  height: 50px;
  justify-content: center;
`;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;
