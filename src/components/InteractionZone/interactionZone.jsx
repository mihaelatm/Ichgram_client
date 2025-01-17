import { useSelector } from "react-redux";
import UserProfile from "../UserProfile/UserProfile";
import styles from "./interactionZone.module.css";

function InteractionZone() {
  const profileImage = useSelector((state) => state.image.profile_image);
  const username = useSelector((state) => state.username.username);

  return (
    <div className={styles.interaction_zone}>
      <div className={styles.interaction_header}>
        <div>
          <UserProfile profileImage={profileImage} username={username} />
        </div>
      </div>
    </div>
  );
}

export default InteractionZone;
