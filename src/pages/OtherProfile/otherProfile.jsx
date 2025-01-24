import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getUserProfile from "../../helpers/getUserProfile";
import getUserPosts from "../../helpers/getUserPosts";
import { setOtherUserPosts } from "../../redux/slices/otherUserPostsSlice";
import { selectOtherUserPostCount } from "../../redux/slices/otherUserPostsSlice";
import border_photo from "../../assets/images/border_photo.svg";
import link_icon from "../../assets/icons/link_icon.svg";
import Button from "../../components/Button/button";
import "/src/styles/globalStyles.css";
import styles from "./otherProfile.module.css";
import getFollowersUser from "../../helpers/getFollowersUser"; // Importă funcția pentru a urmări un utilizator

function OtherProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const dispatch = useDispatch();
  const postsCount = useSelector(selectOtherUserPostCount);

  useEffect(() => {
    const fetchProfileAndPosts = async () => {
      try {
        const userData = await getUserProfile(userId);
        setUser(userData.data);
        setFollowersCount(userData.data.followers_count); // Presupunem că răspunsul conține numărul de followers
        setFollowingCount(userData.data.following_count); // Presupunem că răspunsul conține numărul de following

        const userPosts = await getUserPosts(userId);
        setPosts(userPosts);
        dispatch(setOtherUserPosts(userPosts));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileAndPosts();
  }, [userId, dispatch]);

  const handleFollow = async () => {
    try {
      const updatedStats = await getFollowersUser(userId);
      setFollowersCount(updatedStats.followers_count);
      setFollowingCount(updatedStats.following_count);
    } catch (err) {
      console.error("Error following user:", err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div className={styles.other_profile}>
      <div>
        <div className="profile">
          <div className="container">
            <img src={border_photo} alt="border_image" className="border" />
            {user.profile_image && (
              <img
                src={user.profile_image}
                alt="Profile"
                className="profile_image"
              />
            )}
          </div>

          <div className="about_content">
            <div className="about_profile">
              <p className="username">{user.username}</p>
              <Button
                text="Follow"
                className={styles.follow_button}
                onClick={handleFollow}
              />
              <Button text="Message" className={styles.message_button} />
            </div>

            <div className="activity_container">
              <div className="profile_content">
                <div className="stat">
                  <p className="stat_number">{postsCount}</p>
                  <p className="stat_label">posts</p>
                </div>
                <div className="stat">
                  <p className="stat_number">{followersCount}</p>
                  <p className="stat_label">followers</p>
                </div>
                <div className="stat">
                  <p className="stat_number">{followingCount}</p>
                  <p className="stat_label">following</p>
                </div>
              </div>
            </div>

            <div className="about_info">
              <div className="bio">
                <p>{user.bio}</p>
              </div>
            </div>

            <div className="link">
              <img src={link_icon} alt="link_icon" />
              <p className="link_text" style={{ cursor: "pointer" }}>
                {user.profile_link.slice(0, 14)}
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="profile_posts">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post._id} className="post_image">
                  {post.images.length > 0 && (
                    <img src={post.images[0]} alt="Post" />
                  )}
                </div>
              ))
            ) : (
              <p>No posts available.</p>
            )}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default OtherProfile;
