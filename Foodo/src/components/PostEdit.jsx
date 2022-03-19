import { IonItem, IonInput, IonLabel, IonButton } from "@ionic/react";
import { useEffect, useState } from "react";
import {Toast} from "@capacitor/toast";


export default function PostEdit({ post, handleSubmit }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function submitEvent(event) {
    event.preventDefault();
    const formData = { title: title, body: body };
    handleSubmit(formData);

    Toast.show({
      text: "Post Updated",
    })
  }

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  return (
    <>
      <form onSubmit={submitEvent}>
        <IonItem>
          <IonLabel>Edit Title</IonLabel>
          <IonInput
            value={title}
            onIonChange={(e) => setTitle(e.target.value)}
            placeholder="title"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Edit Description</IonLabel>
          <IonInput
            value={body}
            onIonChange={(e) => setBody(e.target.value)}
            placeholder="description"
          ></IonInput>
        </IonItem>
        <IonButton type="submit">Update</IonButton>
      </form>
    </>
  );
}
