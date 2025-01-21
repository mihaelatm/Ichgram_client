import styles from "./modalWindowPost.module.css";
import InteractionZone from "../InteractionZone/interactionZone";

function ModalWindowPost({ image, postId, onClose }) {
  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.modal_container} onClick={handleOverlayClick}>
      <div className={styles.window_modal} onClick={handleModalClick}>
        <div className={styles.window_modal_content}>
          <div className={styles.import_photo}>
            {image && (
              <img
                src={image}
                alt="Selected"
                className={styles.selected_image}
              />
            )}
          </div>
          <div className={styles.interaction_zone_container}>
            <InteractionZone postId={postId} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalWindowPost;
