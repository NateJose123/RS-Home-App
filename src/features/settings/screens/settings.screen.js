import React, { useContext, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SyncProfileImages } from "../../../services/cloudStorage/images/syncprofile.images";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    //get uri of local copy of profile picture
    const localPhotoUri = await AsyncStorage.getItem(
      `${currentUser.uid}-profilephotoimg`
    );

    //get timestamp of local picture
    const localTimestamp = await AsyncStorage.getItem(
      `${currentUser.uid}-profilephototimestamp`
    );

    localTimestamp ? localTimestamp.toString() : null;

    //check whether local profile picture is up to date
    //with cloud and determine profile picture to
    //be rendered
    const photoUri = await SyncProfileImages(
      `${currentUser.uid}-profilephoto`,
      localPhotoUri,
      localTimestamp
    );
    //set profile picture
    setPhoto(photoUri);
  };

  const { onLogout, user } = useContext(AuthenticationContext);

  //get profile picture on navigating to settings
  useFocusEffect(() => {
    getProfilePicture(user);
  }, [user]);

  return (
    <SafeArea>
      <Spacer size="large" />
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && (
            <Avatar.Icon size={180} icon="human" backgroundColor="black" />
          )}
          {photo && (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor="black"
            />
          )}
          <Spacer position="top" size="large">
            <Text variant="caption">{user.email}</Text>
          </Spacer>
        </TouchableOpacity>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
