import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styles from "../form/form.module.css";
import Input from "@mui/material/Input";
import logos from "../../assets/images/instagram-text-icon.svg";
import { auth } from "../../assets/js/firebase.js";
import { createUserWithEmailAndPassword, updateProfile ,signInWithEmailAndPassword } from "firebase/auth";

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

export default function Modalform({
  username,
  email,
  password,
  setEmail,
  setPassword,
  setUsername,
  user,
}) {
  const [open, setOpen] = useState(false);
  const [opensignin, setOpensignin] = useState();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const signinhandleOpen = () => setOpensignin(true);
  const signinhandleClose = () => setOpensignin(false);

  const signup = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        handleClose();
        return updateProfile(userCredential.user, {
          displayName: username,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
      signinhandleClose();
  };

  const signin = (event) =>{
    event.preventDefault();
    signInWithEmailAndPassword(auth ,email, password)
    .catch((error) => alert(error.message));
    setOpen(false);
    
  };
  return (
    <div>
      {user ? (
        <Button onClick={() => auth.signOut()}>Logout</Button>
      ) : (
        <div className={style.signin__wrapper}>
        <Button onClick={handleOpen}>sign-up</Button>
        <Button onClick={signinhandleOpen}>sign-in</Button>
        </div>
      )}

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
              sign-up
            </Button>
          </form>
        </Box>
      </Modal>

      <Modal open={opensignin} onClose={signinhandleClose}>
        <Box sx={style}>
          <div className={styles.modal__head}>
            <img className={styles.logo} src={logos} alt="logo" />
          </div>
          <form onSubmit={signin} className={styles.modal__body}>
            
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
            <Button type="submit" onClick={signin}>
              sign-in
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
