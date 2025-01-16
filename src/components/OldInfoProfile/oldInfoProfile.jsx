import { useSelector, useDispatch } from "react-redux";
import styles from "./oldInfoProfile.module.css";
import Button from "../Button/button";
import useImageUpload from "../../hooks/useImageUpload";

function OldInfoProfile() {
  const dispatch = useDispatch();
  const username =
    useSelector((state) => state.username.username) ||
    localStorage.getItem("username");
  const bio =
    useSelector((state) => state.bio.bio) || localStorage.getItem("bio");
  const profileImage = useSelector((state) => state.image.profile_image);

  const { fileInputRef, handleImageUpload } = useImageUpload();

  return (
    <div className={styles.container}>
      <div className={styles.profile_info}>
        <div className={styles.circle}>
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className={styles.profile_picture}
            />
          ) : (
            <span className={styles.placeholder}>NO PHOTO</span>
          )}
        </div>
        <div className={styles.edit_info}>
          <p className={styles.username}>{username}</p>
          <p className={styles.bio}>
            {bio || "Write something about yourself ..."}
          </p>
        </div>
      </div>

      <div className={styles.new_photo}>
        <Button
          text="New photo"
          className={styles.new_photo_bttn}
          onClick={() => fileInputRef.current.click()}
        />
      </div>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={(event) => handleImageUpload(event)}
      />
    </div>
  );
}

export default OldInfoProfile;
