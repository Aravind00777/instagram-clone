import styles from "./post.module.css";
export default function Post() {
    return <div className={styles.post_block}>
        <h3 className={styles.post_username}>username</h3>
        <figure className={styles.post_profile}><img className={styles.post_image} src="" alt="" />
        </figure>
        <h4>username :caption</h4>
    </div>
}