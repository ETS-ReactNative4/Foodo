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
import PostActionsMenu from "./PostActionsMenu";

export default function Post({post}) {
  return (
    <>
      <IonCard className="cardContainer">
        <PostActionsMenu post={post.id} />
        <IonCardHeader>
          <img
            src={post.postImg}
            alt=""
          />
        </IonCardHeader>
        <IonCardContent>
          <IonRow className="postCardRow" size="12">
            <IonCol className="postCardCol" size="6">
              <IonCardTitle>{post.title}</IonCardTitle>
            </IonCol>
            <IonCol className="postCardCol" size="6">
              <User userId = {post.uid} />
            </IonCol>
          </IonRow>
          <IonRow className="postCardRow">
            <div className="divider"></div>
          </IonRow>
          <IonRow className="postCardRow">
            {post.body}
          </IonRow>
        </IonCardContent>
      </IonCard>
    </>
  );
}
