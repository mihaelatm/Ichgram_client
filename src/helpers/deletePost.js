import axios from "axios";

const deletePost = async (postId) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/post/${postId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error deleting post:",
      error.response?.data || error.message
    );
    throw new Error(
      error.response?.data?.error || "Failed to delete the post."
    );
  }
};

export default deletePost;
