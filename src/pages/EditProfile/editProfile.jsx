import EditProfileForm from "../../components/EditProfileForm/editProfileForm";
import OldInfoProfile from "../../components/OldInfoProfile/oldInfoProfile";

import styles from "./editProfile.module.css";

function EditProfile() {
  return (
    <div className={styles.edit_profile_content}>
      <div className={styles.container}>
        <h3>Edit profile</h3>
        <OldInfoProfile />
        <EditProfileForm />
      </div>
    </div>
  );
}

export default EditProfile;
