import { useState } from "react";
import Header from "./components/Header/Header";
import Post from "./components/posts/post";
import Container from "./components/Container";
import "./App.module.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Container>
        <Header />
        <Post />
      </Container>
    </div>
  );
}

export default App;