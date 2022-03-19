import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonRow,
  IonCol,
} from "@ionic/react";
import "../style/Post.css";
import User from "./User";
import dbT from "../service/service.jsx";
import PostActionsMenu from "./PostActionsMenu";
import PostEdit from "./PostEdit";
import { useState } from "react";

export default function Post({ post, reload }) {
  const [isShow, setIsShow] = useState(false);

  async function updatePost(postToUpdate) {
    await dbT.updatePost(post.key, postToUpdate);
    reload();
    console.log(post.key);
    console.log(postToUpdate);
    setIsShow(false);
  }

  return (
    <>
      <IonCard className="cardContainer">
        <PostActionsMenu post={post.key} handleIsShow={setIsShow} reload={reload}/>
        <IonCardHeader>
          <img src={post.url} alt="" />
        </IonCardHeader>
        <IonCardContent>
          <IonRow className="postCardRow" size="12">
            <IonCol className="postCardCol" size="6">
              <IonCardTitle>{post.title}</IonCardTitle>
            </IonCol>
            <IonCol size="6">
              <User
                userId={post.uid}
                postLocale={post.locale}
                postCountry={post.country}
              />
            </IonCol>
          </IonRow>
          <IonRow className="postCardRow">
            <div className="divider"></div>
          </IonRow>
          <IonRow className="postCardRow">{post.body}</IonRow>
        </IonCardContent>
        {isShow && <PostEdit post={post.key} handleSubmit={updatePost} p={post} />}
      </IonCard>
    </>
  );
}
