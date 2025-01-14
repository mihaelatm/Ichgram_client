import styles from "./profileImage.module.css";

function ProfileImage() {
  return (
    <div className={styles.profile_picture_container}>
      <label htmlFor="imageUpload" className={styles.profile_picture_label}>
        <span className={styles.profile_picture_placeholder}>+</span>
      </label>
      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        style={{ display: "none" }}
      />
    </div>
  );
}

export default ProfileImage;
