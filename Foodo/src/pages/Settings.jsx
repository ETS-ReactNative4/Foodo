import {
  IonContent,
  IonPage,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
} from "@ionic/react";
import "../style/Settings.css";
import dbT from "../service/service.jsx";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { camera, brush } from "ionicons/icons";
import UserEdit from "../components/UserEdit";
import LoginEdit from "../components/LoginEdit";
import photo from "../service/cam";

export default function Settings({ userId }) {
  const [user, setUser] = useState([]);
  const [login, setLogin] = useState([]);
  const [image, setImage] = useState("");

  const [isUsernameOpen, setIsUsernameOpen] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);

  const handleToggle = () => {
    setIsUsernameOpen((prev) => !prev);
  };

  const handleToggle2 = () => {
    setIsEmailOpen((prev) => !prev);
  };

  const savePicture = async () => {
    const img = await photo.getPicture();
    setImage(img);
    console.log(image);
  };

  async function updateUser(userToUpdate) {
    await dbT.updateUser(user, userToUpdate);
    console.log(user);
    console.log(userToUpdate);
    console.log("updateUser");
  }

  async function updateEmail(loginToUpdate) {
    await dbT.updateLogin(login.id, loginToUpdate);
    console.log(login.id);
    console.log(loginToUpdate);
    console.log("updateEmail");
    console.log(userId);
  }

  useEffect(() => {
    async function loadUserLogin() {
      const userLogin = await dbT.getSingleLogin("-MyMc4rqtKR3kFhoLW_L");
      setLogin(userLogin);
      console.log(userLogin);
    }
    //load user
    async function loadUser() {
      const users = await dbT.getSingleUser("-MyMc4rqtKR3kFhoLW_L");
      setUser(users);
      console.log(users);
    }
    loadUser();
    loadUserLogin();
  }, []);

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
          {/* Email */}
          <h4>Email:</h4>
          <p className="settingsUser">
            {login?.email}
            <IonButton onClick={handleToggle2}>
              <IonIcon slot="icon-only" icon={brush}></IonIcon>
              {isEmailOpen ? "" : ""}
            </IonButton>
          </p>
          <IonRow
            className={`settingsUserNav ${isEmailOpen ? "showUserEdit" : ""}`}
          >
            <LoginEdit
              userEmail={userId}
              handleSubmit={updateEmail}
            ></LoginEdit>
          </IonRow>
          <h4>
            {/* Profile img */}
            Change Profile Image
            <IonButton onClick={savePicture}>
              <IonIcon slot="icon-only" icon={camera}></IonIcon>
            </IonButton>
          </h4>
        </IonRow>
        <IonRow className="loginDeleteBtn">
          <IonButton>Delete</IonButton>
        </IonRow>
      </IonContent>
    </IonPage>
  );
}
