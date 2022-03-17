import { IonItem, IonInput, IonLabel, IonButton } from "@ionic/react";
import { useEffect, useState } from "react";

export default function PostEdit({ user, handleSubmit }) {
  const [username, setUsername] = useState("");

  function submitEvent(event) {
    event.preventDefault();
    const formData = { username: username };
    handleSubmit(formData);
  }

  useEffect(() => {
    if (user) {
      setUsername(user.username);
    }
  }, [user]);

  return (
    <>
      <form onSubmit={submitEvent}>
        <IonItem>
          <IonLabel>Edit Title</IonLabel>
          <IonInput
            value={username}
            onIonChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          ></IonInput>
        </IonItem>
        <IonButton type="submit">Update</IonButton>
      </form>
    </>
  );
}
