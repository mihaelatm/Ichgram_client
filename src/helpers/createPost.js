import axios from "axios";

const createPost = async (content) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/post",
      {
        content: content,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log("Post with image created successfully", response.data);
  } catch (error) {
    console.error("Error creating post with image", error.response.data);
  }
};

export default createPost;
