import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import EmojiPicker from "../EmojiPicker/EmojiPicker";
import styles from "./windowModal.module.css";
import border_profile_icon from "../../assets/icons/border_profile_icon.svg";
import import_icon from "../../assets/icons/import_icon.svg";
import smile_icon from "../../assets/icons/smile_icon.svg";
import createPost from "../../helpers/createPost";

function WindowModal({ onClose }) {
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");

  const profileImage = useSelector((state) => state.image.profile_image);
  const username = useSelector((state) => state.username.username);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size is too large. Please choose a smaller image.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEmojiSelect = (emoji) => {
    setContent((prevContent) => prevContent + emoji);
  };

  const handleModalClose = async () => {
    if (!image) {
      toast.warning("Please upload an image before posting.");
      return;
    }

    try {
      await createPost(content, image);
      toast.success("Post created successfully!");
      onClose();
    } catch (err) {
      console.error("Error creating post:", err);
      toast.error("Failed to create post. Please try again.");
    }
  };

  return (
    <div className={styles.modal_container}>
      <div className={styles.window_modal}>
        <div className={styles.window_modal_header}>
          <h3 className={styles.window_modal_title}>Create new post</h3>
          <p
            className={`${styles.window_modal_share} ${
              !image ? styles.disabled : ""
            }`}
            onClick={image ? handleModalClose : undefined}
          >
            Share
          </p>
        </div>

        <div className={styles.separator_one} />

        <div className={styles.window_modal_content}>
          <div className={styles.import_photo}>
            <label htmlFor="image-upload" className={styles.upload_label}>
              {image ? (
                <img
                  src={image}
                  alt="Selected"
                  className={styles.uploaded_image}
                />
              ) : (
                <div className={styles.upload_placeholder}>
                  <img src={import_icon} alt="import_icon" />
                  <p>Drag photos and videos here</p>
                </div>
              )}
            </label>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>

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

            <textarea
              placeholder="What's on your mind?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className={styles.content_textarea}
            />
            <div className={styles.smile_icon}>
              <EmojiPicker onEmojiSelect={handleEmojiSelect} />{" "}
            </div>

            <div className={styles.separator_three}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WindowModal;
