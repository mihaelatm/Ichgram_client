import { useState } from "react";
import styles from "./windowModal.module.css";
import border_profile_icon from "../../assets/icons/border_profile_icon.svg";
import import_icon from "../../assets/icons/import_icon.svg";
import smile_icon from "../../assets/icons/smile_icon.svg";

function WindowModal() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Setează imaginea în starea componentului
      };
      reader.readAsDataURL(file); // Citim fișierul ca URL de tip base64
    }
  };

  return (
    <div className={styles.window_modal}>
      <div className={styles.window_modal_header}>
        <h3 className={styles.window_modal_title}>Create new post</h3>
        <p className={styles.window_modal_share}>Share</p>
      </div>

      <div className={styles.separator_one} />

      <div className={styles.window_modal_content}>
        <div className={styles.import_photo}>
          <label htmlFor="image-upload">
            <img src={import_icon} alt="import_icon" />
          </label>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </div>
        <div className={styles.separator_two} />

        {image && (
          <div className={styles.preview_image}>
            <img src={image} alt="Selected" />
          </div>
        )}

        <div className={styles.content_profile}>
          <div className={styles.info_person}>
            <img src={border_profile_icon} alt="border_profile_icon" />
            <p>username</p>
          </div>
          <div className={styles.smile_icon}>
            <img src={smile_icon} alt="smile_icon" />
          </div>

          <div className={styles.separator_three}></div>
        </div>
      </div>
    </div>
  );
}

export default WindowModal;
