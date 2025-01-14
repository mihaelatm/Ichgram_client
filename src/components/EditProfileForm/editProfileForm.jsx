import styles from "./editProfileForm.module.css";
import link_icon from "../../assets/icons/link_icon.svg";
import Button from "../Button/button";

function EditProfileForm() {
  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="ichschool" />

        <label htmlFor="website">Website</label>
        <div className={styles.input_with_icon}>
          <img src={link_icon} alt="icon" className={styles.icon} />
          <input type="text" placeholder="bit.ly/3rpiIbh" />
        </div>

        <div className={styles.input_with_span}>
          <label htmlFor="about">About</label>
          <div className={styles.input_container}>
            <textarea
              id="about"
              className={styles.about_textarea}
              placeholder="Write something about yourself..."
            />
            <span className={styles.character_count}>0 / 150</span>
          </div>
          <Button text="Save" className={styles.save_button} />
        </div>
      </div>
    </div>
  );
}

export default EditProfileForm;
