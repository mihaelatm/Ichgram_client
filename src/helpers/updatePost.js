import axios from "axios";

const updatePost = async (postId, content, images) => {
  try {
    const formData = new FormData();

    // Append content if provided
    if (content) {
      formData.append("content", content);
    }

    // Append images if provided
    if (images && images.length > 0) {
      images.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });
    }

    const response = await axios.put(
      `http://localhost:3000/api/post/${postId}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    console.log("Post updated successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error updating post:",
      error.response?.data || error.message
    );
    throw new Error("Failed to update post.");
  }
};

export default updatePost;
