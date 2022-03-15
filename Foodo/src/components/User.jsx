import { IonRow, IonCol } from "@ionic/react";
import { useEffect, useState } from "react";
import dbT from "../service/service.jsx";

export default function User({ userId }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    async function loadUser() {
      const response = await fetch(
        "https://foodreviewappdb-default-rtdb.firebaseio.com/users.json"
      );
      const data = await response.json();
      setUser(data);
    }
    loadUser();
  }, [userId]);

  return (
    <>
      <IonRow>
        <IonCol size="7">
          {user.username}
          <br></br>
          <span className="geoText">Aarhus</span>
        </IonCol>
        <IonCol size="5">
          <img className="round" src={user.profileImg} alt="" />
        </IonCol>
      </IonRow>
    </>
  );
}
