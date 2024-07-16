import { useState } from "react";
import Header from "./components/Header/Header";
import Post from "./components/posts/post";
import Container from "./components/Container";
import "./App.module.css";
import InnerContainer from "./components/InnerContainer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Container>
        <InnerContainer> <Header /></InnerContainer>
        <Post />
      </Container>
    </div>
  );
}

export default App;