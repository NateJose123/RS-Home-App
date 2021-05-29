import * as firebase from "firebase";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const PostKaizen = (
  maintenancePhotoUrl,
  kaizenText,
  location,
  priority,
  userInfo
) => {
  var newPostKey = firebase.database().ref().child("/maintenancePosts").push()
    .key;
  var postData = {
    datePosted: Date.now(),
    photoUrl: maintenancePhotoUrl,
    author: userInfo.userName,
    uid: userInfo.userId,
    kaizen: kaizenText,
    loc: location,
    priority: priority,
    status: "incomplete",
    id: newPostKey,
  };

  console.log(newPostKey);
  var updates = {};
  updates["/maintenancePosts/" + newPostKey] = postData;

  return firebase.database().ref().update(updates);
};
