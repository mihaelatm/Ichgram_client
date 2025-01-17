import { useSelector } from "react-redux";
import styles from "./profilePosts.module.css";

function ProfilePosts() {
  // Preluăm imaginile postărilor din Redux
  const postImages = useSelector((state) => state.postImages.images);

  return (
    <div className={styles.profile_posts}>
      {postImages.length > 0 ? (
        postImages.map((image, index) => (
          <div key={index} className={styles.post_image}>
            <img
              src={`data:image/jpeg;base64,${image}`} // Afișăm imaginea codificată în Base64
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
