import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import "../style/Home.css";
import Post from "../components/post";
import { useState } from "react";
import dbT from "../service/service.jsx";

export default function Home() {
  const [posts, setPosts] = useState([]);

  async function postsArr() {
    const data = await dbT.getPost();
    // map object into an array with objects
    const postsArray = Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    }));
    return postsArray;
  }

  useIonViewWillEnter(async () => {
    const p = await postsArr();
    setPosts(p);
});

  return (
    <IonPage>
      <IonContent fullscreen>
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </IonContent>
    </IonPage>
  );
}
