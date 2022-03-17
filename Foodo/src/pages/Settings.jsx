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

export default function Settings({ userId }) {
  const [user, setUser] = useState([]);
  const [login, setLogin] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  async function updateUser(userToUpdate) {
    dbT.updateUser(user.id, userToUpdate);
    console.log(user.id);
    console.log(userToUpdate);
    console.log("updateUser");
  }

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
          {/* Username */}
          <h4>Username:</h4>
          <p>
            {user.username}
            <IonButton onClick={handleToggle}>
              <IonIcon slot="icon-only" icon={brush}></IonIcon>
              {isOpen ? "Close" : "Open"}
            </IonButton>
          </p>
          <IonRow className={`settingsUsernameNav ${isOpen ? "showUserEdit" : ""}`}>
            <UserEdit user={userId} handleSubmit={updateUser}></UserEdit>
          </IonRow>
          {/* Email */}
          <h4>Email:</h4>
          <p>
            {login.email}
            <IonIcon slot="icon-only" icon={brush}></IonIcon>
          </p>
          <h4>
            {/* Profile img */}
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
