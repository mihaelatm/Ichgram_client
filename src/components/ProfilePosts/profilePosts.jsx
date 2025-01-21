import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPosts } from "../../redux/slices/postSlice";
import getUserPosts from "../../helpers/getUserPosts";
import styles from "./profilePosts.module.css";
import ModalWindowPost from "../ModalWindowPost/ModalWindowPost";
import DialogWindow from "../DialogWindow/dialogWindow";

function ProfilePosts() {
  const dispatch = useDispatch();
  const needsRefresh = useSelector((state) => state.posts.needsRefresh);
  const posts = useSelector((state) => state.posts.userPosts);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const userPosts = await getUserPosts();
        dispatch(setPosts(userPosts));
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [needsRefresh, dispatch]);

  const handleImageClick = (imageUrl, postId) => {
    setSelectedImage(imageUrl);
    setSelectedPostId(postId);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setSelectedPostId(null);
  };

  const handlePostDeleted = (postId) => {
    dispatch(setPosts(posts.filter((post) => post._id !== postId)));
  };

  return (
    <div className={styles.profile_posts}>
      {isLoading ? (
        <div className={styles.loading_container}>
          <p>Loading posts...</p>
        </div>
      ) : posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className={styles.post_image}>
            <img
              src={post.images[0]}
              alt="Post image"
              className={styles.post_image}
              onClick={() => handleImageClick(post.images[0], post._id)}
            />
            <DialogWindow
              open={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              postId={selectedPostId}
              onPostDeleted={handlePostDeleted}
            />
          </div>
        ))
      ) : (
        <p>No posts yet.</p>
      )}

      {selectedImage && selectedPostId && (
        <ModalWindowPost
          image={selectedImage}
          postId={selectedPostId}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default ProfilePosts;
