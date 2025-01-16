// src/components/EditProfileForm/EditProfileForm.js

import { useSelector } from "react-redux";
import styles from "./editProfileForm.module.css";
import Button from "../Button/button";
import link_icon from "../../assets/icons/link_icon.svg";
import useEditProfile from "../../hooks/useEditProfile";

function EditProfileForm() {
  const {
    username,
    profileLink,
    aboutText,
    error,
    successMessage,
    handleTextChange,
    handleSave,
  } = useEditProfile();

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" defaultValue={username} />

        <label htmlFor="website">Website</label>
        <div className={styles.input_with_icon}>
          <img src={link_icon} alt="icon" className={styles.icon} />
          <input type="text" id="website" defaultValue={profileLink} />
        </div>

        <div className={styles.input_with_span}>
          <label htmlFor="about">About</label>
          <div className={styles.input_container}>
            <textarea
              id="about"
              className={styles.about_textarea}
              value={aboutText}
              placeholder="Write something about yourself..."
              onChange={handleTextChange}
            />
            <span className={styles.character_count}>
              {aboutText.length} / 150
            </span>
          </div>

          {error && <div className={styles.error}>{error}</div>}

          {successMessage && (
            <div className={styles.success}>{successMessage}</div>
          )}
          <Button
            text="Save"
            className={styles.save_button}
            onClick={handleSave}
          />
        </div>
      </div>
    </div>
  );
}

export default EditProfileForm;
