import "../style/Header.css";
import Logo from "../imgs/FOODO-logo.png";
import React from 'react';
import {IonIcon, IonTabButton, IonLabel, IonHeader } from '@ionic/react';
import { arrowBackOutline} from 'ionicons/icons';

export default function Header() {
  return (
    <>
      <IonHeader>
        
          <IonTabButton href="../" className="backbutton">
            <IonIcon icon={arrowBackOutline} />
          </IonTabButton>
        <img className="headerLogo" src={Logo} alt="Foodo logo"></img>
      </IonHeader>
      
    </>
  );
}
