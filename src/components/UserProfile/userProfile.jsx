import styles from "./userProfile.module.css";
import border_profile_icon from "../../assets/icons/border_profile_icon.svg";
import { useSelector } from "react-redux";

function UserProfile({ profileImage }) {
  const username = useSelector((state) => state.username.username);
  return (
    <div className={styles.profile_image_container}>
      <div className={styles.content}>
        <img
          src={profileImage || border_profile_icon}
          alt="border_profile_icon"
          className={profileImage ? styles.profile_image : ""}
        />
        <p className={styles.username}>{username}</p>
      </div>
    </div>
  );
}

export default UserProfile;
