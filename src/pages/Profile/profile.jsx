import { ToastContainer } from "react-toastify";
import ProfileHeader from "../../components/ProfileHeader/profileHeader";
import ProfilePosts from "../../components/ProfilePosts/profilePosts";
import styles from "./profile.module.css";

function Profile() {
  return (
    <div className={styles.profile}>
      <ProfileHeader />
      <ProfilePosts />
      <ToastContainer />
    </div>
  );
}

export default Profile;
