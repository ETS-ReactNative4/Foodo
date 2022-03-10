import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
} from "@ionic/react";

export default function Post() {
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
            alt=""
          />
        </IonCardHeader>
        <IonCardContent>
          <IonCardTitle>Card1</IonCardTitle>
          <IonCardSubtitle>This card 1 description is da bomb</IonCardSubtitle>
        </IonCardContent>
      </IonCard>
    </>
  );
}
