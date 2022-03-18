import {
  IonContent,
  IonPage,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  useIonViewWillEnter,
} from "@ionic/react";
import "../style/Settings.css";
import dbT from "../service/service.jsx";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { camera, brush } from "ionicons/icons";
import UserEdit from "../components/UserEdit";
import LoginEdit from "../components/LoginEdit";
import photo from "../service/cam";
import uc from "../service/userControl";
import { useHistory } from "react-router";

export default function Settings({ userId }) {
  const history = useHistory();
  const [user, setUser] = useState([]);
  const [image, setImage] = useState("");

  const [isUsernameOpen, setIsUsernameOpen] = useState(false);

  const handleToggle = () => {
    setIsUsernameOpen((prev) => !prev);
  };

  const savePicture = async () => {
    const img = await photo.getPicture();
    setImage(img);
    console.log(image);
  };

  async function updateUser(userToUpdate) {
    const userKey = await uc.getUserKey();
    const u = {
      key: userKey,
      id: user.id,
      password: user.password,
      profileImg: user.profileImg,
      username: userToUpdate.username,
    };
    await dbT.updateUser(userKey, userToUpdate);
    localStorage.setItem("user", JSON.stringify(u));
  }

  async function deleteUser() {
    // dbT.deleteUser(userKey);
    console.log("user deleted");
  }

  function logoutUser() {
    uc.logout();
    history.replace("/login");
  }

  // useEffect(() => {
  //   async function loadUser() {
  //     const userKey = await uc.getUserKey();
  //     const users = await uc.getLoggedUser(userKey);
  //     setUser(users);
  //     console.log(users);
  //   }
  //   loadUser();
  // }, []);

  useIonViewWillEnter(async () => {
    const userKey = await uc.getUserKey();
    const users = await uc.getLoggedUser(userKey);
    setUser(users);
    console.log(users);
  });

  return (
    <IonPage>
      <IonContent fullscreen className="settingsContainer">
        <Header />
        <IonRow size="12" className="settingsImgRow settingsCenter">
          <img className="profileImg" src={user?.profileImg} alt="" />
        </IonRow>
        <IonRow size="12" className="settingsCenter">
          <h2>{user?.username}</h2>
        </IonRow>
        <IonRow className="settingsDivider"></IonRow>
        <IonRow>
          <h3>Account Info</h3>
        </IonRow>
        <IonRow className="settingsUserInfo">
          {/* Username */}
          <h4>Username:</h4>
          <p className="settingsUser">
            {user?.username}
            <IonButton onClick={handleToggle}>
              <IonIcon slot="icon-only" icon={brush}></IonIcon>
              {isUsernameOpen ? "" : ""}
            </IonButton>
          </p>
          <IonRow
            className={`settingsUserNav ${
              isUsernameOpen ? "showUserEdit" : ""
            }`}
          >
            <UserEdit user={userId} handleSubmit={updateUser}></UserEdit>
          </IonRow>
          <h4>
            {/* Profile img */}
            Change Profile Image
            <IonButton onClick={savePicture}>
              <IonIcon slot="icon-only" icon={camera}></IonIcon>
            </IonButton>
          </h4>
        </IonRow>
        <IonRow className="deleteLogoutBtns">
          <IonButton onClick={logoutUser}>Logout</IonButton>
          <IonButton onClick={deleteUser}>Delete</IonButton>
        </IonRow>
      </IonContent>
    </IonPage>
  );
}
