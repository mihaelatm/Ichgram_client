import { useSelector } from "react-redux";
import styles from "./oldInfoProfile.module.css";
import Button from "../Button/button";

function OldInfoProfile() {
  const username =
    useSelector((state) => state.username.username) ||
    localStorage.getItem("username");
  const bio =
    useSelector((state) => state.bio.bio) || localStorage.getItem("bio");

  return (
    <div className={styles.container}>
      <div className={styles.profile_info}>
        <div className={styles.circle}>
          <span className={styles.placeholder}>NO PHOTO</span>
        </div>
        <div className={styles.edit_info}>
          <p className={styles.username}>{username}</p>
          <p className={styles.bio}>
            {bio || "Write something about yourself ..."}
          </p>
        </div>
      </div>

      <div className={styles.new_photo}>
        <Button text="New photo" className={styles.new_photo_bttn} />
      </div>
      <input type="file" style={{ display: "none" }} />
    </div>
  );
}

export default OldInfoProfile;
