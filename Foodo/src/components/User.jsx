import { IonRow, IonCol, useIonViewWillEnter } from "@ionic/react";
import { useEffect, useState } from "react";
import dbT from "../service/service.jsx";

export default function User({ userId, postLocale, postCountry }) {
  const [user, setUser] = useState({});
  

  useEffect(() => {
    const userArr = async () => {
      const u = await dbT.getSingleUser(userId);
      
      setUser(u);
    
    };
    
    userArr();
    
  }, []);

  return (
    <>
    
      <IonRow>
        <IonCol size="7">
          {user.username}
          <br></br>
          <span className="geoText">{postLocale}</span>
          <br/>
          <span className="geoText">{postCountry}</span>
        </IonCol>
        <IonCol size="5">
          <img className="round" src={user.profileImg} alt="" />
        </IonCol>
      </IonRow>
    </>
  );
}
