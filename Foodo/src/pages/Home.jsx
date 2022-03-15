import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import "../style/Home.css";
import Post from "../components/Post";
import { useState } from "react";
import dbT from "../service/service.jsx";

export default function Home() {
  const [posts, setPosts] = useState();

  const postsArr = (data) => {
    const allPosts = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));
    return allPosts;
  };

  const load = async () => {
    const response = await fetch(
      "https://foodreviewappdb-default-rtdb.firebaseio.com/posts.json"
    );
    const data = await response.json();
    setPosts(postsArr(data));
  };

  useIonViewWillEnter(() => {
    load();
  });

  return (
    <IonPage>
      <IonContent fullscreen>
        {posts?.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </IonContent>
    </IonPage>
  );
}
