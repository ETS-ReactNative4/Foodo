import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonButton
} from '@ionic/react';
import '../style/FrontPage.css';
import Header from "../components/Header";

export default function FrontPage(){
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen className='frontPage' >
        <div class="Front-buttons">
          <IonButton class="Front-button" color="light" href="/Addpost" width="80%;">
              Login
            </IonButton>
            <IonButton class="Front-button" color="secondary" href="/FrontPage">
              Sign up
            </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

