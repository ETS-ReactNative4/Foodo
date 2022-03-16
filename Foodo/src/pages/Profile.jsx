import {
  IonContent,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonRow,
  IonCol,
} from "@ionic/react";
import "../style/Profile.css";
import Header from "../components/Header";
import dbT from "../service/service.jsx";
import { useEffect, useState } from "react";
import Post from "../components/post";

export default function Profile() {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    //load posts with user
    async function loadUserPosts() {
      const postsArr = Object.keys(dbT.getPost).map((key) => ({
        id: key,
        ...dbT.getPost[key],
      }));
      const userArr = Object.keys(dbT.getUser).map((key) => ({
        id: key,
        ...dbT.getUser[key],
      }));
      const postsWithUser = postsArr.map((post) => {
        const user = userArr.find((user) => user.id === post.uid);
        post = { ...post, user: user };
        return post;
      });
      setPosts(postsWithUser);
    }
    //load user
    async function loadUser() {
      const users = await dbT.getSingleUser(2);
      setUser(users);
    }
    loadUserPosts();
    loadUser();
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen className="profileContainer">
        <Header />
        <IonRow size="12" className="profileImgRow">
          <img className="profileImg" src={user.profileImg} alt="" />
        </IonRow>
        <IonRow size="12">
          <h2>{user.username}</h2>
        </IonRow>
        <IonRow size="12" className="profilePosts">
          <IonCol size="6">
            <h3>My Posts</h3>
          </IonCol>
          <IonCol size="6">
            <IonButton color="success" href="/Addpost">
              Create post
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          {posts && posts.length > 0 ? (
            posts.map((post) => <Post post={post} key={post.id} />)
          ) : (
            <p>Loading...</p>
          )}
        </IonRow>
      </IonContent>
    </IonPage>
  );
}
