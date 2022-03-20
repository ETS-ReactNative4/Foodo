import { IonButton } from "@ionic/react";
import "../style/PostActionsMenu.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import dbT from "../service/service.jsx";
import {Toast} from "@capacitor/toast";
import { useHistory } from "react-router";

export default function PostActionMenu({ post, handleIsShow, reload }) {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const editPost = () => {
    setIsOpen(false);
    console.log("edited post");
    handleIsShow(true);
  };

  async function deletePost() {
    setIsOpen(false);
    await dbT.deletePost(post);
    reload();
    console.log("post deleted");
    console.log(post);

    await Toast.show({
      text: "Post Deleted",
    })
  }

  return (
    <>
      <div className="postMenuBtnContainer">
        <IonButton className="postSettingBtn" onClick={handleToggle}>
          {isOpen ? "Close" : "Open"}
        </IonButton>
        <div className={`menuNav ${isOpen ? "showMenu" : ""}`}>
          <ul>
            <IonButton to="#" className="menuNavLinks" onClick={() => editPost()}>
              Edit
            </IonButton>
            <IonButton to="#" className="menuNavLinks" onClick={deletePost} role="destructive" type="button">
              Delete
            </IonButton>
          </ul>
        </div>
      </div>
    </>
  );
}
