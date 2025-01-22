import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import styles from "./modalWindowPost.module.css";
import InteractionZone from "../InteractionZone/interactionZone";
import updatePost from "../../helpers/updatePost";
import { updatePostContentAndDate } from "../../redux/slices/postSlice";

function ModalWindowPost({ image, postId, onClose }) {
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedContent, setEditedContent] = useState("");
  const [editedImage, setEditedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(image);
  const fileInputRef = useRef(null);

  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  const handleEdit = (content) => {
    setEditedContent(content); // Setează conținutul curent pentru editare
    setIsEditModalOpen(true); // Deschide fereastra modală de editare
  };

  const handleSaveEdit = async () => {
    try {
      // Trimite datele către backend
      const response = await updatePost(
        postId,
        editedContent,
        editedImage ? [editedImage] : []
      );

      if (response) {
        toast.success("Post updated successfully!");

        // Actualizează starea Redux cu noile date
        dispatch(
          updatePostContentAndDate({
            postId,
            content: editedContent,
            createdAt: new Date().toISOString(),
          })
        );

        // Actualizează imaginea în UI
        if (editedImage) {
          setPreviewImage(URL.createObjectURL(editedImage));
        }

        // Închide fereastra modală
        setIsEditModalOpen(false);
        onClose(); // Închide fereastra modală principală
      } else {
        toast.error("Failed to update post.");
      }
    } catch (error) {
      console.error("Error updating post:", error);
      toast.error("An error occurred while updating the post.");
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setEditedImage(file); // Salvează fișierul imaginii
      setPreviewImage(URL.createObjectURL(file)); // Actualizează previzualizarea imaginii
      toast.info("Image uploaded successfully!");
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Deschide dialogul de selectare a fișierului
  };

  return (
    <div className={styles.modal_container} onClick={handleOverlayClick}>
      <div className={styles.window_modal} onClick={handleModalClick}>
        <div className={styles.window_modal_content}>
          <div className={styles.import_photo}>
            {previewImage && (
              <img
                src={previewImage}
                alt="Selected"
                className={styles.selected_image}
              />
            )}
          </div>
          <div className={styles.interaction_zone_container}>
            <InteractionZone
              postId={postId}
              onCloseWindowModal={onClose}
              onEdit={handleEdit}
            />
          </div>
        </div>
      </div>

      {isEditModalOpen && (
        <div
          className={styles.edit_modal_overlay}
          onClick={() => setIsEditModalOpen(false)}
        >
          <div className={styles.edit_modal} onClick={handleModalClick}>
            <div className={styles.edit_content}>
              <p>Edit content</p>
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                className={styles.content_textarea}
              />
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />

            <button
              onClick={handleButtonClick}
              className={styles.upload_button}
            >
              Change Image
            </button>
            <div className={styles.edit_buttons}>
              <button onClick={handleSaveEdit} className={styles.save_button}>
                Save
              </button>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className={styles.cancel_button}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalWindowPost;
