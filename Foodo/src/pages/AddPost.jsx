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
  IonImg,
  IonTextarea,
  IonInput,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonTabButton,
  useIonViewDidEnter,
  useIonViewWillEnter,
} from "@ionic/react";
import { useState, useEffect } from "react";
import { cameraOutline, navigateOutline } from "ionicons/icons";
import { useHistory } from "react-router";
import dbT from "../service/service.jsx";
import camera from "../service/cam.jsx";
import { Geolocation } from "@capacitor/geolocation";
import "../style/AddPost.css";
import uc from "../service/userControl.jsx";
import { getIdToken } from "@firebase/auth";
import { isEmpty } from "@firebase/util";
import {Toast} from "@capacitor/toast";


// import { Camera, CameraResultType } from "@capacitor/camera";
// import { camera } from "ionicons/icons";

export default function PostForm({ post, handleSubmit }) {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [currentUser, setCurrentUser] = useState("");

  const [locale, setLocale] = useState("");
  const [country, setCountry] = useState("");
  // const [imageFile, setImageFile] = useState({});

  async function savePicture() {
    const img = await camera.getPicture();
    setImage(img);
  }

  const printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();
    const lo = coordinates.coords.longitude;
    const la = coordinates.coords.latitude;
    console.log("Current position:", coordinates);

    await getLocation(lo, la);
  };

  const getLocation = async (lo, la) => {
    const key = "cd0394416d67f2b60cde05246ddd3b89";
    const url = `http://api.positionstack.com/v1/reverse?access_key=${key}&query=${la},${lo}&limit=1`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();

    console.log(data.data[0].administrative_area);
    setLocale(data.data[0].administrative_area);
    setCountry(data.data[0].country);

    console.log(country);
  };

  useEffect(() => {
    const getId = async () => {
      setCurrentUser(await uc.getUserKey());
    };

    if (post) {
      setTitle(post.title);
      setDescription(post.Description);

      // setImage(post.image);
    }
    getId();
  }, [post]);

  function submitEvent(event) {
    event.preventDefault();

    console.log("Virk", currentUser);
    //const formData = { title: title, Description: Description };
    //handleSubmit(formData);
    if (title != null && Description != null && !isEmpty(currentUser)) {
      dbT.createPost(title, Description, image, currentUser, country, locale);
      console.log("User", currentUser);
      history.replace('/profile');
    }

    Toast.show({
      text: "Post Created",
    })

  }

  //   async function submitEvent(event) {
  //     event.preventDefault();
  //     async function takePicture() {
  //         const imageOptions = {
  //             quality: 80,
  //             width: 500,
  //             allowEditing: true,
  //             resultType: CameraResultType.DataUrl
  //         };
  //         const image = await Camera.getPhoto(imageOptions);
  //         setImageFile(image);
  //         setImage(image.dataUrl);
  //     }

  return (
    <>
      <form onSubmit={submitEvent}>
        <IonItem>
          <IonLabel position="stacked">Title</IonLabel>
          <IonInput
            value={title}
            placeholder="Food title"
            onIonChange={(e) => setTitle(e.target.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Food description</IonLabel>
          <IonTextarea
            value={Description}
            placeholder="Tell us about your food"
            onIonChange={(e) => setDescription(e.target.value)}
          ></IonTextarea>
        </IonItem>
        <img
          src={
            image
              ? image
              : "https://media.istockphoto.com/photos/white-paper-texture-background-picture-id1293996796?b=1&k=20&m=1293996796&s=170667a&w=0&h=ot-Q4dcJynVUxQyjU5P7i4qPZxmoWmPC0M09R53D8j8="
          }
          alt="pic"
        />

        <div className="AddIcons">
          <IonTabButton tab={savePicture} onClick={savePicture}>
            <IonIcon icon={cameraOutline} />
          </IonTabButton>
          <IonTabButton
            tab={printCurrentPosition}
            onClick={printCurrentPosition}
          >
            <IonIcon icon={navigateOutline} />
          </IonTabButton>
        </div>

        {/* <IonItem onClick={takePicture} lines="none">
                <IonLabel>Choose Image</IonLabel>
                <IonButton>
                    <IonIcon slot="icon-only" icon={camera} />
                </IonButton>npm install @ionic/pwa-elements
            </IonItem> */}
        {/* {image && <IonImg className="ion-padding" src={image} onClick={takePicture} />} */}

        <div className="ion-padding">
          <IonButton type="submit" expand="block" color="secondary">
            Save
          </IonButton>
        </div>
      </form>
    </>
  );
}
