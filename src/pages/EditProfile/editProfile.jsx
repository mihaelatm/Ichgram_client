import EditProfileForm from "../../components/EditProfileForm/editProfileForm";
import OldInfoProfile from "../../components/OldInfoProfile/oldInfoProfile";
import styles from "./editProfile.module.css";
import { useState } from "react";
function EditProfile() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className={styles.edit_profile_content}>
      <div className={styles.container}>
        <h3>Edit profile</h3>

        <OldInfoProfile
          onImageSelect={handleImageSelect}
          selectedImage={selectedImage}
        />
        <EditProfileForm selectedImage={selectedImage} />
      </div>
    </div>
  );
}

export default EditProfile;
