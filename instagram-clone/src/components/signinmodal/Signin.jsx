import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import styles from "../form/form.module.css";
import Input from "@mui/material/Input";
import logos from "../../assets/images/instagram-text-icon.svg";


export default function Signin() {
  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <div className={styles.modal__head}>
            <img className={styles.logo} src={logos} alt="logo" />
          </div>
          <form onSubmit={signup} className={styles.modal__body}>
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
