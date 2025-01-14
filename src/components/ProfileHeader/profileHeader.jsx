import styles from "./profileHeader.module.css";
import ProfileImage from "../ProfileImage/profileImage";
import AboutProfile from "../AboutProfile/aboutProfile";

function ProfileHeader() {
  return (
    <div className={styles.profile_header}>
      <ProfileImage />
      <AboutProfile />
    </div>
  );
}

export default ProfileHeader;
