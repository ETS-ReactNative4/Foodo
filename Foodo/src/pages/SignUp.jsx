import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  submitEvent,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonAvatar,
  IonIcon,
  IonTabButton,
} from "@ionic/react";
import "../style/Signup.css";
import Header from "../components/Header";
import { useState } from "react";
import dbT from "../service/service.jsx";
import camera from "../service/cam.jsx";
import { cameraOutline } from "ionicons/icons";

import { useHistory } from "react-router";
import { isEmpty } from "@firebase/util";
import { Toast } from "@capacitor/toast";

export default function SignUp() {
  const history = useHistory();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState("");

  async function savePicture() {
    const img = await camera.getPicture();
    setImage(img);
  }

  function CheckPassword(pwd, rPwd) {
    let check = false;
    if (pwd === rPwd) {
      check = true;
    }
    return check;
  }

  function CheckIfEmpty(mail, pwd, rPwd) {
    let check = false;
    if (isEmpty(mail) || isEmpty(pwd) || isEmpty(rPwd)) {
      check = true;
    }
    return check;
  }

  async function signUpHandler(event) {
    event.preventDefault();
    if (!CheckIfEmpty(mail, password, rPassword)) {
      if (CheckPassword(password, rPassword)) {
        await dbT.createUser(mail, image, null, password);

        await Toast.show({
          text: "Sign up successful",
        });
        history.push("/login");
      } else {
        await Toast.show({
          text: "Make sure password is the same",
        });
      }
    } else {
      await Toast.show({
        text: "Field is empty",
      });
    }
  }
  return (
    <>
      <Header />
      <h2 className="SignH2">Sign up</h2>
      <div className="SignForm">
        <form onSubmit={signUpHandler}>
          <IonItem>
            <IonLabel>Username:</IonLabel>
            <IonInput
              value={mail}
              placeholder="Username"
              onIonChange={(e) => setMail(e.target.value)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Password:</IonLabel>
            <IonInput
              type="password"
              value={password}
              placeholder="Password"
              onIonChange={(e) => setPassword(e.target.value)}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel>Repeat:</IonLabel>
            <IonInput
              type="password"
              value={rPassword}
              placeholder=" Password"
              onIonChange={(e) => setRPassword(e.target.value)}
            ></IonInput>
          </IonItem>

          <IonAvatar className="imageSignUp">
            <img
              src={
                image
                  ? image
                  : "https://media.istockphoto.com/photos/white-paper-texture-background-picture-id1293996796?b=1&k=20&m=1293996796&s=170667a&w=0&h=ot-Q4dcJynVUxQyjU5P7i4qPZxmoWmPC0M09R53D8j8="
              }
              alt="pic"
            />
          </IonAvatar>

          <IonTabButton tab={savePicture} onClick={savePicture}>
            <IonIcon icon={cameraOutline} />
          </IonTabButton>
          <div className="ion-padding">
            <IonButton type="submit" expand="block" color="secondary">
              Sign up
            </IonButton>
          </div>
        </form>
      </div>
    </>
  );
}
