import { IonHeader } from "@ionic/react";
import "../style/Header.css";
import Logo from "../imgs/FOODO-logo.png";

export default function Header() {
  return (
    <>
      <IonHeader>
        <img className="headerLogo" src={Logo} alt=""></img>
      </IonHeader>
    </>
  );
}
