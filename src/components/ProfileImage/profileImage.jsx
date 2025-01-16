import { useSelector } from "react-redux";
import border_photo from "../../assets/images/border_photo.svg";
import styles from "./profileImage.module.css";

function ProfileImage() {
  const profileImage = useSelector((state) => state.image.profile_image);

  return (
    <div className={styles.container}>
      <img src={border_photo} alt="border_image" className={styles.border} />
      {profileImage && (
        <img
          src={profileImage}
          alt="Profile"
          className={styles.profile_image}
        />
      )}
    </div>
  );
}

export default ProfileImage;
