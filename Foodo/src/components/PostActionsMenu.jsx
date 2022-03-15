import { IonButton } from "@ionic/react";
import "../style/PostActionsMenu.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import dbT from "../service/service.jsx";

export default function PostActionMenu({ post }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const editPost = () => {
    setIsOpen(false);
    console.log("edited post");
  };

  const deletePost = async () => {
    setIsOpen(false);
    await dbT.deletePost(post);
    console.log("post deleted");
    console.log(post);
  };

  return (
    <>
      <div className="postMenuBtnContainer">
        <IonButton className="postSettingBtn" onClick={handleToggle}>
          {isOpen ? "Close" : "Open"}
        </IonButton>
        <div className={`menuNav ${isOpen ? "showMenu" : ""}`}>
          <ul>
            <Link to="#" className="menuNavLinks" onClick={() => editPost()}>
              Edit
            </Link>
            <Link to="#" className="menuNavLinks" onClick={() => deletePost()}>
              Delete
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
