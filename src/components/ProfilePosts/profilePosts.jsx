import { useState } from "react";
import { useSelector } from "react-redux";
import ModalWindowPost from "../ModalWindowPost/modalWindowPost";
import styles from "./profilePosts.module.css";

function ProfilePosts() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const postImages = useSelector((state) => state.postImages.images);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className={styles.profile_posts}>
      {postImages.length > 0 ? (
        postImages.map((image, index) => (
          <div
            key={index}
            className={styles.post_image}
            onClick={() => openModal(image)}
          >
            <img
              src={image}
              alt={`Post image ${index + 1}`}
              className={styles.image}
            />
          </div>
        ))
      ) : (
        <p>No posts found</p>
      )}

      {isModalOpen && (
        <ModalWindowPost image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
}

export default ProfilePosts;
