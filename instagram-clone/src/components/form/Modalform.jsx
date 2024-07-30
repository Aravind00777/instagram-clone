import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styles from "../form/form.module.css";
import Input from "@mui/material/Input";
import logos from "../../assets/images/instagram-text-icon.svg";
import { auth } from "../../assets/js/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


export default function Modalform() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signup = (event) => {
    event.preventDefault();
    console.log("Signup with email:", email, "and password:", password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User signed up:", userCredential.user);
        handleClose();
      })
      .catch((error) => {
        console.error("Error signing up:", error.message);
        alert(error.message);
      });
  };
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className={styles.modal__head}>
            <img className={styles.logo} src={logos} alt="logo" />
          </div>
          <form onSubmit={signup} className={styles.modal__body}>
            <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="email"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signup}>
              sign-in
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
