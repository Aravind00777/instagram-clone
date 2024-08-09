import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styles from "../form/form.module.css";
import Input from "@mui/material/Input";
import logos from "../../assets/images/instagram-text-icon.svg";


export default function Signin({signinhandleClose, opensignin, signin, style, setEmail, setPassword, email, password}) {
  return (
    <div>
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
