import axios from "axios";

const createPost = async (content, imageBase64) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/post",
      {
        content: content,
        imageBase64: imageBase64,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log("Post with image created successfully", response.data);
  } catch (error) {
    console.error(
      "Error creating post with image",
      error.response?.data || error.message
    );
  }
};

export default createPost;
