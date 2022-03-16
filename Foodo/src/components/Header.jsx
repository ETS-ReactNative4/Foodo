import "../style/Header.css";
import Logo from "../imgs/FOODO-logo.png";
import React from 'react';
import {IonBackButton, IonButton, IonHeader } from '@ionic/react';

export default function Header() {
  return (
    <>
      <IonHeader>
      
          <IonButton type="submit"  expand="block" color="secondary" className="Backbutton">
          </IonButton>
  
        <img className="headerLogo" src={Logo} alt="Foodo logo"></img>
      </IonHeader>
      
    </>
  );
}
