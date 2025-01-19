import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import UserProfile from "../UserProfile/UserProfile";
import styles from "./interactionZone.module.css";
import additionally_icon from "../../assets/icons/additionally_icon.svg";
import DialogWindow from "../DialogWindow/dialogWindow";
import getPostById from "../../helpers/getPostById";

function InteractionZone({ postId }) {
  const profileImage = useSelector((state) => state.image.profile_image);
  const username = useSelector((state) => state.username.username);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Obținem datele postării folosind postId
    const fetchPost = async () => {
      const post = await getPostById(postId); // Apelăm funcția din serviciu
      if (post && post.content && post.created_at) {
        setContent(post.content);
        setCreatedAt(new Date(post.created_at).toLocaleString()); // Formatează data
      }
    };

    fetchPost();
  }, [postId]);

  return (
    <div className={styles.interaction_zone}>
      <div className={styles.interaction_header}>
        <div className={styles.user_profile}>
          <UserProfile profileImage={profileImage} username={username} />

          <img
            src={additionally_icon}
            alt="additionally_icon"
            className={styles.additionally_icon}
            onClick={handleModalOpen}
          />
        </div>
      </div>
      <div className={styles.separator}></div>

      <div className={styles.post_content}>
        <UserProfile profileImage={profileImage} username={username} />
        <p className={styles.content}>{content}</p> {/* Afișează content */}
        <p className={styles.created_date}>{createdAt}</p> {/* Afișează data */}
      </div>

      <DialogWindow open={isModalOpen} onClose={handleModalClose} />
    </div>
  );
}

export default InteractionZone;
