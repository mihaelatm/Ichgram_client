import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./windowModal.module.css";
import border_profile_icon from "../../assets/icons/border_profile_icon.svg";
import import_icon from "../../assets/icons/import_icon.svg";
import smile_icon from "../../assets/icons/smile_icon.svg";

function WindowModal() {
  const [image, setImage] = useState(null);

  const profileImage = useSelector((state) => state.image.profile_image);
  const username = useSelector((state) => state.username.username);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.modal_container}>
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
              <div className={styles.profile_image_container}>
                <img
                  src={profileImage || border_profile_icon}
                  alt="border_profile_icon"
                  className={profileImage ? styles.profile_image : ""}
                />
              </div>
              <p>{username || "username"}</p>
            </div>
            <div className={styles.smile_icon}>
              <img src={smile_icon} alt="smile_icon" />
            </div>

            <div className={styles.separator_three}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WindowModal;