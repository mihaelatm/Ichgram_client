import axios from "axios";

const createPost = async (content, token) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/post",
      { content },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error creating post:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export default createPost;
