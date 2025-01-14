import ProfileHeader from "../../components/ProfileHeader/profileHeader";
import ProfilePosts from "../../components/ProfilePosts/profilePosts";
import styles from "./profile.module.css";

function MyProfile() {
  return (
    <div className={styles.profile}>
      <ProfileHeader />
      <ProfilePosts />
    </div>
  );
}

export default MyProfile;
