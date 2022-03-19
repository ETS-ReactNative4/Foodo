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
  IonIcon,
  useIonLoading,
  useIonViewWillEnter,
} from "@ionic/react";
import "../style/Sign.css";
import Header from "../components/Header";
import { useState } from "react";
import uc from "../service/userControl";
import { useHistory } from "react-router";
import { Toast } from "@capacitor/toast";
import { isEmpty } from "@firebase/util";


export default function PostForm() {
  const history = useHistory();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [present, dismiss] = useIonLoading();

  function CheckIfEmpty(mail, pwd) {
    let check = false;
    if (isEmpty(mail) || isEmpty(pwd)) {
      check = true;
    }
    return check;
  }

  async function submitHandler(event) {
    event.preventDefault();
    if (!CheckIfEmpty(mail, password)) {
      if (await uc.login(mail, password)) {
        history.replace("/home");
      } else {
        Toast.show({
          text: "Email or Password does not match",
        });
      }
    } else {
      await Toast.show({
        text: "Field is empty",
      });
    }
  }

  useIonViewWillEnter(()=> {
    present();
    dismiss();
  })

  return (
    <>
      <Header />
      <h2 className="SignH2">Login</h2>

      <div className="SignForm">
        <form onSubmit={submitHandler}>
          <IonItem>
            <IonLabel>E-mail</IonLabel>
            <IonInput
              value={mail}
              placeholder="E-mail"
              onIonChange={(e) => setMail(e.target.value)}
            />
          </IonItem>
          <IonItem>
            <IonLabel>Password</IonLabel>
            <IonTextarea
              value={password}
              placeholder="Password"
              onIonChange={(e) => setPassword(e.target.value)}
            ></IonTextarea>
          </IonItem>

          <div className="ion-padding">
            <IonButton type="submit" expand="block" color="secondary">
              Login
            </IonButton>
          </div>
        </form>
      </div>
    </>
  );
}
