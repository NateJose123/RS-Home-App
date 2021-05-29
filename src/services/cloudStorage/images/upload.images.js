import * as firebase from "firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UploadImages = async (uri, name, location, timestamp) => {
  const response = await fetch(uri);
  const blob = await response.blob();

  var metadata = {
    contentType: "image/png",
    timeStamp: timestamp.toString(),
    //prettier-ignore
    customMetadata: { 'timeStamp': timestamp.toString() },
  };

  //creating new file with specified location and name
  const ref = firebase
    .storage()
    .ref()
    .child(location + "/" + name);

  //uploading image to firebase
  const task = ref.put(blob, metadata);

  //Promise to handle image upload asynchronously
  new Promise((resolve, reject) => {
    task
      .on(
        //do these on changing state of image upload
        "state_changed",
        (snapshot) => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          //logging image upload
          console.log("Upload is " + progress + "% done");
        },
        (error) =>
          reject(error) /* this is where you would put an error callback! */,
        () => {
          task.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log("Successfully uploaded picture!");
            console.log(location);
            if (location === "ProfilePics") {
              updateUserProfilePic(downloadURL);
            } else if (location === "MaintenancePics") {
              console.log("saving maintenance img locally");
              //storing download url locally so that it can be uploaded to the database as needed
              AsyncStorage.setItem(`maintenanceimg`, downloadURL);
            }
          });
        }
      )
      .then(
        (r) => resolve(r),
        (e) => reject(e)
      );
  });
};

//update user profile variable - photoUrl to point
//to current uploaded photo
const updateUserProfilePic = async (imgUrl) => {
  var user = firebase.auth().currentUser;
  await user
    .updateProfile({
      photoURL: imgUrl,
    })
    .catch((error) => console.log(error));
};
