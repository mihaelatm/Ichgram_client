import styles from "./oldInfoProfile.module.css";

function OldInfoProfile() {
  return (
    <div className={styles.container}>
      <div className={styles.circle}>
        <span className={styles.placeholder}>NO PHOTO</span>
      </div>
      <div className={styles.edit_info}>
        <p className={styles.name}></p>

        <p className={styles.description}>Write something about yourself ...</p>
      </div>

      <button className={styles.new_photo_bttn}>New Photo</button>
      <input type="file" style={{ display: "none" }} />
    </div>
  );
}

export default OldInfoProfile;
