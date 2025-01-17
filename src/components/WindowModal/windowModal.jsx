import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { triggerRefresh } from "../../redux/slices/postSlice";
import EmojiPicker from "../EmojiPicker/EmojiPicker";
import UserProfile from "../UserProfile/UserProfile";
import styles from "./windowModal.module.css";
import import_icon from "../../assets/icons/import_icon.svg";
import createPost from "../../helpers/createPost";
import { addPostImage } from "../../redux/slices/postImageSlice";

function WindowModal({ onClose }) {
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const profileImage = useSelector((state) => state.image.profile_image);
  const username = useSelector((state) => state.username.username);
  const dispatch = useDispatch();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size is too large. Please choose a smaller image.");
        return;
      }
      setImage(file);
      dispatch(addPostImage(URL.createObjectURL(file)));
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

    const formData = new FormData();
    formData.append("content", content);
    formData.append("images", image);

    try {
      await createPost(formData);
      toast.success("Post created successfully!");
      dispatch(triggerRefresh());
      onClose();
    } catch (err) {
      console.error("Error creating post:", err);
      toast.error("Failed to create post. Please try again.");
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains(styles.modal_container)) {
      onClose();
    }
  };

  return (
    <div className={styles.modal_container} onClick={handleOutsideClick}>
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
                  src={URL.createObjectURL(image)}
                  alt="Selected"
                  className={styles.uploaded_image}
                />
              ) : (
                <div className={styles.upload_placeholder}>
                  <img
                    src={import_icon}
                    alt="import_icon"
                    className={styles.import_icon}
                  />
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
              <UserProfile profileImage={profileImage} username={username} />
            </div>

            <textarea
              placeholder="What's on your mind?"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className={styles.content_textarea}
            />
            <div className={styles.smile_icon}>
              <EmojiPicker onEmojiSelect={handleEmojiSelect} />
            </div>

            <div className={styles.separator_three}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WindowModal;
