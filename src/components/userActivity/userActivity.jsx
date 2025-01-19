import { useSelector } from "react-redux";
import styles from "./userActivity.module.css";

function UserActivity() {
  const postCount = useSelector((state) => state.posts?.postCount ?? 0); // Folosim optional chaining și valoare default (0)

  return (
    <div className={styles.profile_content}>
      <div className={styles.stat}>
        <p className={styles.stat_number}>{postCount}</p>
        <p className={styles.stat_label}>posts</p>
      </div>
      <div className={styles.stat}>
        <p className={styles.stat_number}>0</p>
        <p className={styles.stat_label}>followers</p>
      </div>
      <div className={styles.stat}>
        <p className={styles.stat_number}>0</p>
        <p className={styles.stat_label}>following</p>
      </div>
    </div>
  );
}

export default UserActivity;
