import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  useIonViewWillEnter,
  IonRow,
  IonCol,
} from "@ionic/react";
import "../style/Profile.css";
import Header from "../components/Header";
import dbT from "../service/service";
import { useEffect, useState } from "react";
import Post from "../components/post";

export default function Profile() {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen className="profileContainer" >
        <IonRow size="12" className="profileImgRow">
          <img
            className="profileImg"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
          />
        </IonRow>
        <IonRow size="12">
          <h2>Rasmus Abelgaard</h2>
        </IonRow>
        <IonRow size="12" className="profilePosts">
          <IonCol size="6">
            <h3>My Posts</h3>
          </IonCol>
          <IonCol size="6">
            <IonButton color="success" href="/Addpost">
              Create post
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
}
