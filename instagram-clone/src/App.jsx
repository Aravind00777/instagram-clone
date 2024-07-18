import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Post from "./components/posts/Post";
import Container from "./components/Container";
import styles from "./App.module.css"; // Assuming the CSS module is named correctly
import InnerContainer from "./components/InnerContainer";
import { db } from "./assets/js/firebase";
import { collection, onSnapshot } from "firebase/firestore"; // Import Firestore methods

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "posts"), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    // Cleanup the subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className={styles.App}>
      <Container>
        <InnerContainer>
          <Header />
        </InnerContainer>
        {posts.map((post) => (
          <Post
            key={post.id}
            username={post.username}
            caption={post.caption}
            imageurl={post.imageurl}
          />
        ))}
      </Container>
    </div>
  );
}

export default App;
