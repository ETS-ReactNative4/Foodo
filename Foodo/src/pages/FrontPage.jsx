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
        <div className="Front-buttons">
          <IonButton className="Front-button" color="light" href="/Login" width="80%;">
              Login
            </IonButton>
            <IonButton className="Front-button" color="secondary" href="/SignUp">
              Sign up
            </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

