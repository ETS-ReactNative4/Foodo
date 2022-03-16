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
<<<<<<< HEAD
            <IonCol className="postCardCol" size="6">
              <User userId = {post.uid} />
=======
            <IonCol size="6">
              <User userId = {post.uid} postLocale = {post.locale} postCountry = {post.country}/>
>>>>>>> main
            </IonCol>
          </IonRow>
          <IonRow className="postCardRow">
            <div className="divider"></div>
          </IonRow>
<<<<<<< HEAD
          <IonRow className="postCardRow">
=======
          <IonRow>
            
>>>>>>> main
            {post.body}
          </IonRow>
        </IonCardContent>
      </IonCard>
    </>
  );
}
