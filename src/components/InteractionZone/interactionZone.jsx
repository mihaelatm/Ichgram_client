import { useState } from "react";
import { useSelector } from "react-redux";
import UserProfile from "../UserProfile/UserProfile";
import styles from "./interactionZone.module.css";
import additionally_icon from "../../assets/icons/additionally_icon.svg";
import DialogWindow from "../DialogWindow/dialogWindow";

function InteractionZone() {
  const profileImage = useSelector((state) => state.image.profile_image);
  const username = useSelector((state) => state.username.username);

  // Starea pentru modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.interaction_zone}>
      <div className={styles.interaction_header}>
        <div className={styles.user_profile}>
          <UserProfile profileImage={profileImage} username={username} />
          {/* Iconița care deschide modalul */}
          <img
            src={additionally_icon}
            alt="additionally_icon"
            className={styles.additionally_icon}
            onClick={handleModalOpen} // Deschidem modalul la click
          />
        </div>
      </div>
      <div className={styles.separator}></div>

      <div className={styles.user_bio}>
        <UserProfile profileImage={profileImage} username={username} />
        <p className={styles.content}></p>
      </div>

      {/* Modalul */}
      <DialogWindow open={isModalOpen} onClose={handleModalClose} />
    </div>
  );
}

export default InteractionZone;
