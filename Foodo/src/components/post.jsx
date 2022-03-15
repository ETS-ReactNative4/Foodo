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
        <PostActionsMenu />
        <IonCardHeader>
          <img
            src={post.postImg}
            alt=""
          />
        </IonCardHeader>
        <IonCardContent>
          <IonRow size="12">
            <IonCol size="6">
              <IonCardTitle>{post.title}</IonCardTitle>
            </IonCol>
            <IonCol size="6">
              <User userId = {post.uid} />
            </IonCol>
          </IonRow>
          <IonRow>
            <div className="divider"></div>
          </IonRow>
          <IonRow>
            {post.body}
          </IonRow>
        </IonCardContent>
      </IonCard>
    </>
  );
}
