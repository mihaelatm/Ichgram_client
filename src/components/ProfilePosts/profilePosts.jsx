import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../redux/slices/postSlice";
import getUserPosts from "../../helpers/getUserPosts";
import "/src/styles/globalStyles.css";

function ProfilePosts() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.userPosts);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const userPosts = await getUserPosts();
        dispatch(setPosts(userPosts));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [dispatch]);

  return (
    <div className="profile_posts">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post_image">
            <img src={post.images[0]} alt="Post image" className="post_image" />
          </div>
        ))
      ) : (
        <p>No posts yet.</p>
      )}
    </div>
  );
}

export default ProfilePosts;
