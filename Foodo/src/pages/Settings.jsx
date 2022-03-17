import {
  IonContent,
  IonPage,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
} from "@ionic/react";
import "../style/Settings.css";
import Header from "../components/Header";
import dbT from "../service/service.jsx";
import { useEffect, useState } from "react";
import {camera, brush } from "ionicons/icons";

export default function Profile() {
  const [user, setUser] = useState([]);
  const [login, setLogin] = useState([]);

  useEffect(() => {
    async function loadUserLogin() {
      const userLogin = await dbT.getSingleLogin(2);
      setLogin(userLogin);
      console.log(userLogin);
    }
    //load user
    async function loadUser() {
      const users = await dbT.getSingleUser(2);
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
          <img className="profileImg" src={user.profileImg} alt="" />
        </IonRow>
        <IonRow size="12" className="settingsCenter">
          <h2>{user.username}</h2>
        </IonRow>
        <IonRow className="settingsDivider"></IonRow>
        <IonRow>
          <h3>Account Info</h3>
        </IonRow>
        <IonRow className="settingsUserInfo">
          <h4>Username:</h4>
          <p>
            {user.username}
            <IonIcon slot="icon-only" icon={brush}></IonIcon>
          </p>
          <h4>Email:</h4>
          <p>
            {login.email}
            <IonIcon slot="icon-only" icon={brush}></IonIcon>
          </p>
          <h4>
            Change Profile Image
            <IonIcon slot="icon-only" icon={camera}></IonIcon>
          </h4>
        </IonRow>
        <IonRow className="loginDeleteBtn">
          <IonButton>Delete</IonButton>
        </IonRow>
      </IonContent>
    </IonPage>
  );
}
