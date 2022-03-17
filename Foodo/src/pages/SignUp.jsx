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
    IonTabButton
  } from "@ionic/react";
  import "../style/Signup.css";
  import Header from "../components/Header";
  import {useState} from "react";
  import dbT from "../service/service.jsx";
  import camera from "../service/cam.jsx";
  import { cameraOutline} from 'ionicons/icons';

 
  import { useHistory } from "react-router";
import { async } from "@firebase/util";
  
  



  export default function SignUp() {
    const history = useHistory();
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [rPassword, setRPassword] = useState("");
    const [image, setImage] = useState("");
    const [id, setId] = useState("");
   

    async function savePicture(){
        const img = await camera.getPicture();
        setImage(img);
    } 

    async function signUpHandler(event){
          event.preventDefault();
          await dbT.createUser(mail, image, null, password);
          
          
        }
    return (
        <>
        <Header />
       <h2 className="SignH2">Sign up</h2>
        <div className="SignForm">
           
            <form onSubmit={signUpHandler}>
                
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
                
                <IonItem>
                    <IonLabel>Repeat</IonLabel>
                    <IonTextarea
                        value={rPassword}
                        placeholder=" Password"
                        onIonChange={e => setRPassword(e.target.value)}></IonTextarea>
                </IonItem>

                <IonAvatar className="imageSignUp">
                <img src={image ? image: "https://media.istockphoto.com/photos/white-paper-texture-background-picture-id1293996796?b=1&k=20&m=1293996796&s=170667a&w=0&h=ot-Q4dcJynVUxQyjU5P7i4qPZxmoWmPC0M09R53D8j8="} alt="pic"/>
                </IonAvatar>
                
                <IonTabButton tab={savePicture} >
                    <IonIcon icon={cameraOutline} /> 
                </IonTabButton>
                <div className="ion-padding">
                    <IonButton type="submit" expand="block" color="secondary" >
                        Sign up
                    </IonButton>

                </div>
            </form>
        </div>
        </>
    );
  }
  
  