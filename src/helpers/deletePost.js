import axios from "axios";

const deletePost = async (postId) => {
  const token = localStorage.getItem("token");

  try {
    const response = await axios.delete(`/api/post/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data.message);
  } catch (error) {
    if (error.response) {
      console.error("Error deleting post:", error.response.data.error);
    } else {
      console.error("Server error:", error.message);
    }
  }
};

export default deletePost;
