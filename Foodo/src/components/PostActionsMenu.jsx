import { IonButton, IonIcon } from "@ionic/react";
import { ellipsisHorizontalOutline } from "ionicons/icons";
import "../style/PostActionsMenu.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PostActionMenu({ post }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const editPost = () => {
    setIsOpen(false);
    console.log("edited post");
  };

  const deletePost = () => {
    setIsOpen(false);
    console.log("post deleted");
  };

  const postActionMenuNavigation = [
    { link: "#", text: "Edit" },
    { link: "#", text: "Delete", onClick: deletePost },
  ];

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
