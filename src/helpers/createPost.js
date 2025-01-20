import axios from "axios";

const createPost = async (formData) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/post",
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("Post with image created successfully", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error creating post with image",
      error.response?.data || error.message
    );
    throw error;
  }
};

export default createPost;
