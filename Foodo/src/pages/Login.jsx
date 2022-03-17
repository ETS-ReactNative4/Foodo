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
    IonIcon
  } from "@ionic/react";
  import "../style/Sign.css";
  import Header from "../components/Header";
  import {useState} from "react";


  export default function PostForm({ }) {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
        <Header />
       <h2 className="SignH2">Login</h2>
    
        <div className="SignForm">
           
            <form >
                
                <IonItem>
                    
                    <IonLabel>E-mail</IonLabel>
                    <IonInput
                        value={mail}
                        placeholder="E-mail"
                        onIonChange={e => setMail(e.target.value)}
                    />
                </IonItem>
                <IonItem>
                    <IonLabel>Password</IonLabel>
                    <IonTextarea
                        value={password}
                        placeholder="Password"
                        onIonChange={e => setPassword(e.target.value)}></IonTextarea>
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
  