import { IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonImg,
    IonTextarea,
    IonInput,
    IonItem,
    IonIcon,
    IonLabel,
    IonButton,
  
    useIonViewDidEnter,
    useIonViewWillEnter, } from "@ionic/react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import dbT from "../service/service.jsx";
import { Camera, CameraResultType } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';

// import { Camera, CameraResultType } from "@capacitor/camera";
// import { camera } from "ionicons/icons";

export default function PostForm({ post, handleSubmit }) {
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [image, setImage] = useState("");
  
    const [locale, setLocale] = useState("");
    const [country, setCountry] = useState("");
    // const [imageFile, setImageFile] = useState({});

    

const printCurrentPosition = async () => {
  const coordinates = await Geolocation.getCurrentPosition();
  const lo = coordinates.coords.longitude;
  const la = coordinates.coords.latitude;
  console.log('Current position:', coordinates);
  

  await getLocation(lo, la);
  
};

const getLocation = async (lo, la) => {
    
    
    const key = 'cd0394416d67f2b60cde05246ddd3b89';
    const url = `http://api.positionstack.com/v1/reverse?access_key=${key}&query=${la},${lo}&limit=1`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.data[0].administrative_area);
    setLocale(data.data[0].administrative_area);
    setCountry(data.data[0].country);
    
    console.log(country);
}

    const takePicture = async () => {
        const image = await Camera.getPhoto({
          quality: 90,
          allowEditing: true,
          resultType: CameraResultType.Uri
        });
      
        // image.webPath will contain a path that can be set as an image src.
        // You can access the original file using image.path, which can be
        // passed to the Filesystem API to read the raw data of the image,
        // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
        const imageUrl = image.webPath;
        setImage(imageUrl);
        console.log(imageUrl);
      
        // Can be set to the src of an image now
        //imageElement.src = imageUrl;
      };

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setDescription(post.Description);
            
            // setImage(post.image);
        }
    }, [post]);

   
        
    

    

    async function submitEvent(event) {
        event.preventDefault();
        
        console.log(locale);
        //const formData = { title: title, Description: Description };
        //handleSubmit(formData);
        if(title != null && Description != null){
        dbT.createPost(title, Description, image, 2, country, locale);
        history.replace('/home');
        }
    }

    // async function takePicture() {
    //     const imageOptions = {
    //         quality: 80,
    //         width: 500,
    //         allowEditing: true,
    //         resultType: CameraResultType.DataUrl
    //     };
    //     const image = await Camera.getPhoto(imageOptions);
    //     setImageFile(image);
    //     setImage(image.dataUrl);
    // }
    return (
        <>
        <form onSubmit={submitEvent}>
            <IonItem>
                <IonLabel position="stacked">Title</IonLabel>
                <IonInput
                    value={title}
                    placeholder="Food title"
                    onIonChange={e => setTitle(e.target.value)}
                />
            </IonItem>
            <IonItem>
                <IonLabel position="stacked">Food description</IonLabel>
                <IonTextarea
                    value={Description}
                    placeholder="Tell us about your food"
                    onIonChange={e => setDescription(e.target.value)}></IonTextarea>
            </IonItem>
            <IonButton onClick={takePicture}>
        picture
        </IonButton>

        <IonButton onClick={printCurrentPosition}>
        GeoLocation
        </IonButton>
            {/* <IonItem onClick={takePicture} lines="none">
                <IonLabel>Choose Image</IonLabel>
                <IonButton>
                    <IonIcon slot="icon-only" icon={camera} />
                </IonButton>npm install @ionic/pwa-elements
            </IonItem> */}
            {/* {image && <IonImg className="ion-padding" src={image} onClick={takePicture} />} */}

            <div className="ion-padding">
                <IonButton type="submit" expand="block">
                    Save
                </IonButton>

            </div>
        </form>
        
        <img src={image ? image: "https://media.istockphoto.com/photos/white-paper-texture-background-picture-id1293996796?b=1&k=20&m=1293996796&s=170667a&w=0&h=ot-Q4dcJynVUxQyjU5P7i4qPZxmoWmPC0M09R53D8j8="} alt="pic"/>
    
    
        </>
    );
}
