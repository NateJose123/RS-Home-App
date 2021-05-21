import * as firebase from "firebase";
import { UploadImages } from "./upload.images";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

export const SyncProfileImages = async (
  imageId,
  localPhotoUri,
  localPhotoTimestamp
) => {
  //Get reference to latest profile pic in cloud
  var ImageRef = firebase
    .storage()
    .ref()
    .child("ProfilePics/" + imageId);

  //Finding timestamp metadata to compare with
  //local timestamp to see what uri has to
  //be returned
  return (
    ImageRef.getMetadata()
      .then(async (metadata) => {
        //accessing timestamp on cloud
        const cloudStamp = metadata["customMetadata"]["timeStamp"];

        //if timestamps match, files are identical
        //so local file can be used to save data
        if (localPhotoTimestamp === cloudStamp) {
          return localPhotoUri;
        }
        //if local photo is newer, upload it to cloud
        else if (parseFloat(localPhotoTimestamp) > parseFloat(cloudStamp)) {
          UploadImages(
            localPhotoUri,
            imageId,
            "ProfilePics",
            localPhotoTimestamp
          );
          return localPhotoUri;
        }
        //otherwise, get latest photo from the cloud
        else {
          newUri = await ImageRef.getDownloadURL().then((url) => url);
          AsyncStorage.setItem(`${imageId}img`, newUri);
          AsyncStorage.setItem(`${imageId}timestamp`, cloudStamp.toString());
          return localPhotoUri;
        }
      })
      //find any errors
      .catch((error) => {})
  );
};
