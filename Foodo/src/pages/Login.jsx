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
    IonTextarea
  } from "@ionic/react";
  import "../style/Sign.css";
  import Header from "../components/Header";
  import {useState} from "react";
  import uc from "../service/userControl";
  import { useHistory } from "react-router";

  


  export default function PostForm() {
    const history = useHistory();
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

    async function submitHandler(event){
        event.preventDefault();
       if(await uc.login(mail, password)){
       history.replace('/home');
    }
    }

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
  