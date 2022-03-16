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

export default function Post({ post }) {
  async function updatePost(postToUpdate) {
    dbT.updatePost(post.key, postToUpdate);
    console.log(post.key);
    console.log(postToUpdate);
  }

  return (
    <>
      <IonCard className="cardContainer">
        <PostActionsMenu post={post.key} />
        <IonCardHeader>
          <img src={post.postImg} alt="" />
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
        <PostEdit post={post.key} handleSubmit={updatePost} />
      </IonCard>
    </>
  );
}
