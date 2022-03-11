import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import { person } from "ionicons/icons";
import "../style/Post.css";

export default function Post() {
  return (
    <>
      <IonCard>
        <IonButton className="postSettingBtn">. . .</IonButton>
        <IonCardHeader>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
            alt=""
          />
        </IonCardHeader>
        <IonCardContent>
          <IonRow size="12">
            <IonCol size="6">
              <IonCardTitle>Mine Sandwiches</IonCardTitle>
            </IonCol>
            <IonCol size="6">
              <IonRow>
                <IonCol size="7">
                  Rasmus Abelgaard<br></br>
                  <span className="geoText">Aarhus</span>
                </IonCol>
                <IonCol size="5">
                  <img
                    className="round"
                    src="https://learnenglish.britishcouncil.org/sites/podcasts/files/2021-10/RS6715_492969113-hig.jpg"
                    alt=""
                  />
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
          <IonRow>
            <div className="divider"></div>
          </IonRow>
          <IonRow>
            Mine sandwiches er de bedste der findes, ingen kan hamle sig op med
            disse lækkerier
          </IonRow>
        </IonCardContent>
      </IonCard>
    </>
  );
}
