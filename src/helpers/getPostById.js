import axios from "axios";

const getPostById = async (postId) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/post/single/${postId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    return { error: "Error fetching post" };
  }
};

export default getPostById;
