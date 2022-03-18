import {
  IonContent,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonRow,
  IonCol,
  useIonViewWillEnter,
} from "@ionic/react";
import "../style/Profile.css";
import Header from "../components/Header";
import dbT from "../service/service.jsx";
import { useEffect, useState } from "react";
import Post from "../components/post";
import uc from "../service/userControl";

export default function Profile() {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);


  

  async function userPosts() {
   
    const po = await dbT.getPost();
    const u = await uc.getUserKey();

    const p = Object.keys(po).map((key) => ({
      key: key,
      ...po[key],
    }));

   console.log(p);
    const userPosts = p.map(post => {
        const posts = p.find(post => post.uid === u);
        
        return posts;
    });
    setPosts(userPosts);
}
  
  async function loadUser() {
    const users = await uc.getLoggedUser();
    setUser(users);
  }

  function init(){
    loadUser();
    userPosts();
  }
  

  useIonViewWillEnter(() =>{
    init();
  })

  return (
    <IonPage>
      <IonContent fullscreen className="profileContainer">
        <Header />
        <IonRow size="12" className="profileImgRow">
          <img className="profileImg" src={user?.profileImg} alt="" />
        </IonRow>
        <IonRow size="12">
          <h2>{user?.username}</h2>
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
            posts?.map((post) => <Post post={post} key={post.id} />)
          ) : (
            <p>Loading...</p>
          )}
        </IonRow>
      </IonContent>
    </IonPage>
  );
}
