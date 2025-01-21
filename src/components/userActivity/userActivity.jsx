import { useSelector } from "react-redux";
import { selectPostCount } from "../../redux/slices/postSlice";
import styles from "./userActivity.module.css";

function UserActivity() {
  // Obținem numărul total de postări folosind selectorul din Redux
  const postCount = useSelector(selectPostCount);

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
