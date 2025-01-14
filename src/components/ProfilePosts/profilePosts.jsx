import post1 from "../../assets/images/post1.png";
import styles from "./profilePosts.module.css";

function ProfilePosts() {
  return (
    <div className={styles.profile_posts}>
      <img src={post1} alt="post1" />
      <img src={post1} alt="post2" />
      <img src={post1} alt="post3" />
      <img src={post1} alt="post4" />
      <img src={post1} alt="post5" />
      <img src={post1} alt="post6" />
    </div>
  );
}

export default ProfilePosts;
