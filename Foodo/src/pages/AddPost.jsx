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
    IonButton, } from "@ionic/react";
import { useState, useEffect } from "react";
// import { Camera, CameraResultType } from "@capacitor/camera";
// import { camera } from "ionicons/icons";

export default function PostForm({ post, handleSubmit }) {
    const [title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    // const [image, setImage] = useState("");
    // const [imageFile, setImageFile] = useState({});

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setDescription(post.Description);
            // setImage(post.image);
        }
    }, [post]);

    function submitEvent(event) {
        event.preventDefault();
        const formData = { title: title, Description: Description };
        handleSubmit(formData);
        
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
            {/* <IonItem onClick={takePicture} lines="none">
                <IonLabel>Choose Image</IonLabel>
                <IonButton>
                    <IonIcon slot="icon-only" icon={camera} />
                </IonButton>
            </IonItem> */}
            {/* {image && <IonImg className="ion-padding" src={image} onClick={takePicture} />} */}

            <div className="ion-padding">
                <IonButton type="submit" expand="block">
                    Save
                </IonButton>
            </div>
        </form>
    );
}
