import React, { useContext, useEffect, useState, useRef } from "react";
import { Camera } from "expo-camera";
import { View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { UploadImages } from "../../../services/cloudStorage/images/upload.images";
import { Text } from "../../../components/typography/text.component";
import styled from "styled-components";
import { ImageCompressor } from "../../../services/compression/image.compression";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef();
  const [hasPermission, setHasPermission] = useState(null);
  const { user } = useContext(AuthenticationContext);

  const InnerSnap = styled.View`
    width: 100%;
    height: 100%;
    z-index: 999;
  `;

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      const timestamp = Date.now();
      const name = `${user.uid}-profilephoto`;
      const compressedPhoto = await ImageCompressor(
        photo.uri,
        photo.width,
        photo.height,
        "profile" //tag so that the compressor knows how much to compress
      );
      console.log("compressed photo", compressedPhoto);
      //Async storage stores two things: the image uri and its timestamp
      AsyncStorage.setItem(`${name}img`, compressedPhoto.uri);
      AsyncStorage.setItem(`${name}timestamp`, timestamp.toString());
      //Uploads to cloud after saving locally
      UploadImages(compressedPhoto.uri, name, "ProfilePics", timestamp).then(
        navigation.goBack()
      );
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
      >
        <TouchableOpacity onPress={snap}>
          <InnerSnap />
        </TouchableOpacity>
      </ProfileCamera>
    </>
  );
};
