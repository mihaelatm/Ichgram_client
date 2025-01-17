import styles from "./userActivity.module.css";
import { useSelector } from "react-redux";

function UserActivity() {
  const postImages = useSelector((state) => state.postImages.images);
  return (
    <div className={styles.profile_content}>
      <div className={styles.stat}>
        <p className={styles.stat_number}>{postImages.length}</p>
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
