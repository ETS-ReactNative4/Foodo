import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
  } from "@ionic/react";
  import "../style/Profile.css";
  import Header from "../components/Header";
  
  export default function Frontpage() {
    return (
      <IonPage>
        <Header />
        <IonContent fullscreen>
          <IonButton color="success" href="/Addpost">
            Create post
          </IonButton>
        </IonContent>
      </IonPage>
    );
  }
  