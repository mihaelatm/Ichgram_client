import { useSelector } from "react-redux";
import styles from "./profilePosts.module.css";

function ProfilePosts() {
  const postImages = useSelector((state) => state.postImages.images);

  return (
    <div className={styles.profile_posts}>
      {postImages.length > 0 ? (
        postImages.map((image, index) => (
          <div key={index} className={styles.post_image}>
            <img
              src={image}
              alt={`Post image ${index + 1}`}
              className={styles.image}
            />
          </div>
        ))
      ) : (
        <p>No posts found</p>
      )}
    </div>
  );
}

export default ProfilePosts;
