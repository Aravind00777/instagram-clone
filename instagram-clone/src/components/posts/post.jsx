import styles from "./post.module.css";
import postimage from "../../assets/images/postimage.png";
import Avatar from "@mui/material/Avatar";
export default function Post({username , caption , imageurl}) {
  return (
    <div className={styles.post_block}>
      <div className={styles.post_top_block}>
        <Avatar
          className={styles.post_avatar}
          alt={username}
          src="/static/images/avatar/1.jpg"
        />
        <h3 className={styles.post_username}>{username}</h3>
      </div>
      <figure className={styles.post_profile}>
        <img className={styles.post_image} src={imageurl} alt="" />
      </figure>
      <div className={styles.username_caption_block}>
      <h4 className={styles.username_caption}>
        <strong>{username}</strong> {caption}
      </h4>
      </div>
    </div>
  );
}
