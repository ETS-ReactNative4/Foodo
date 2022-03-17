import { IonItem, IonInput, IonLabel, IonButton } from "@ionic/react";
import { useEffect, useState } from "react";

export default function EmailEdit({ userEmail, handleSubmit }) {
  const [email, setEmail] = useState("");

  function submitEvent(event) {
    event.preventDefault();
    const formData = { email: email };
    handleSubmit(formData);
  }

  useEffect(() => {
    if (userEmail) {
      setEmail(userEmail.email);
    }
  }, [userEmail]);

  return (
    <>
      <form onSubmit={submitEvent}>
        <IonItem>
          <IonLabel>Edit Title</IonLabel>
          <IonInput
            type="email"
            value={email}
            onIonChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          ></IonInput>
        </IonItem>
        <IonButton type="submit">Update</IonButton>
      </form>
    </>
  );
}
