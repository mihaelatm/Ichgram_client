import ProfileHeader from "../../components/ProfileHeader/profileHeader";
import styles from "./profile.module.css";

function MyProfile() {
  return (
    <div className={styles.profile}>
      <ProfileHeader />
    </div>
  );
}

export default MyProfile;
