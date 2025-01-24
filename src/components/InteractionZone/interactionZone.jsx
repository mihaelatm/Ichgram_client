import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify"; // Importă toast
import UserProfile from "../UserProfile/UserProfile";
import styles from "./interactionZone.module.css";
import additionally_icon from "../../assets/icons/additionally_icon.svg";
import DialogWindow from "../DialogWindow/dialogWindow";
import getPostById from "../../helpers/getPostById";
import deletePost from "../../helpers/deletePost";
import { removePost } from "../../redux/slices/postSlice";
import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
  format,
  isThisYear,
} from "date-fns";
import border_profile_icon from "../../assets/icons/border_profile_icon.svg";

function InteractionZone({ postId, onCloseWindowModal, onEdit }) {
  const dispatch = useDispatch();
  const profileImage = useSelector((state) => state.image.profile_image);
  const username = useSelector((state) => state.username.username);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState("");
  const [createdAt, setCreatedAt] = useState(null);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDelete = async (postId) => {
    try {
      await deletePost(postId);
      dispatch(removePost(postId));
      handleModalClose();
      onCloseWindowModal();
      toast.success("Post deleted successfully!"); // Mesaj de succes pentru ștergere
    } catch (err) {
      console.error("Error deleting post:", err);
      toast.error("Failed to delete post."); // Mesaj de eroare pentru ștergere
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await getPostById(postId);
        if (post && post.data) {
          setContent(post.data.content);
          setCreatedAt(new Date(post.data.created_at));
        }
      } catch (err) {
        console.error("Error fetching post:", err);
        setContent("Error loading content");
        setCreatedAt(null);
      }
    };

    fetchPost();
  }, [postId]);

  const renderInstagramDate = (date) => {
    const now = new Date();
    const postDate = new Date(date);

    const minutesAgo = differenceInMinutes(now, postDate);
    const hoursAgo = differenceInHours(now, postDate);
    const daysAgo = differenceInDays(now, postDate);

    if (minutesAgo < 1) return "1m";
    if (minutesAgo < 60) return `${minutesAgo}m`;
    if (hoursAgo < 24) return `${hoursAgo}h`;
    if (daysAgo < 7) return `${daysAgo}d`;

    if (isThisYear(postDate)) {
      return format(postDate, "d MMM");
    } else {
      return format(postDate, "d MMM yyyy");
    }
  };

  return (
    <div className={styles.interaction_zone}>
      <div className={styles.interaction_header}>
        <div className={styles.user_profile}>
          <UserProfile profileImage={profileImage} />
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
        <div className={styles.content_container}>
          <div className={styles.content}>
            <img
              src={profileImage || border_profile_icon}
              alt="profile"
              className={
                profileImage
                  ? styles.profile_image
                  : styles.default_profile_image
              }
            />
            <div className={styles.post_text}>
              <p className={styles.text_username}>
                {username}
                <span className={styles.text_content}>{content}</span>
              </p>
            </div>
          </div>
          <p className={styles.created_date}>
            {createdAt && renderInstagramDate(createdAt)}
          </p>
        </div>
      </div>

      <DialogWindow
        open={isModalOpen}
        onClose={handleModalClose}
        onDelete={() => handleDelete(postId)}
        onEdit={() => onEdit(content)}
        postId={postId}
      />
    </div>
  );
}

export default InteractionZone;
