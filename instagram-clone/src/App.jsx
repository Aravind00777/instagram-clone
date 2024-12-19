import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Post from "./components/posts/post";
import Container from "./components/Container";
import Modalform from "./components/form/Modalform";
import styles from "./App.module.css";  
import ImageUpload from "./components/imageupload/ImageUpload";
import InnerContainer from "./components/InnerContainer";
import { db ,auth } from "./assets/js/firebase";
import { collection, onSnapshot } from "firebase/firestore";  


function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState('');
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    // Cleanup the subscription on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged( (authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    // Cleanup the subscription on unmount
    return () => unsubscribeFromAuth();
  }, [user,username]);

  return (
    <div className={styles.App}>
      <Container>
        <InnerContainer>
          <Header />
          <Modalform username={username} email={email} password={password} setEmail={setEmail} setPassword={setPassword} setUsername={setUsername} user={user}/>
        </InnerContainer>
        {posts.map((post) => (
          <Post
            key={post.id}
            username={post.username}
            caption={post.caption}
            imageurl={post.imageurl}
          />
        ))}
        {user?.displayName ? (
           <ImageUpload username={user.displayName}/>
        ): (
            <h3>sorry you need to login to upload...</h3>
        )}
       
      </Container>
    </div>
  );
}

export default App;
