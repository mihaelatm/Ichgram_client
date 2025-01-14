import styles from "./userActivity.module.css";

function UserActivity() {
  return (
    <div className={styles.profile_content}>
      <div className={styles.stat}>
        <p className={styles.stat_number}>0</p>
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
