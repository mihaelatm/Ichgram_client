import axios from "axios";
import { toast } from "react-toastify";

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
    toast.success("Post deleted successfully!");
    return response.data;
  } catch (error) {
    console.error("Error deleting post", error);
    toast.error("Failed to delete post.");
  }
};

export default deletePost;
