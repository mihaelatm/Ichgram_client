import { useEffect, useState } from "react";
import getUserPosts from "../../helpers/getUserPosts";
import styles from "./profilePosts.module.css";

function ProfilePosts() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getUserPosts();

        // Verificăm dacă posts este un array valid
        if (Array.isArray(posts) && posts.length > 0) {
          const postImages = posts.flatMap((post) => post.images); // Adunăm toate imaginile din fiecare postare
          setImages(postImages);
        } else {
          console.warn("No posts found.");
          setImages([]);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        setImages([]); // Setăm imagini goale în caz de eroare
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.profile_posts}>
      {images.map((image, index) => (
        <img
          key={index}
          src={`data:image/jpeg;base64,${image}`} // Prefixăm imaginea pentru a fi afișată corect
          alt={`post${index + 1}`}
          className={styles.profile_post_image} // Stiluri CSS pentru imagini
        />
      ))}
    </div>
  );
}

export default ProfilePosts;
