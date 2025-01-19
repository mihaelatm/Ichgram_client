import axios from "axios";

const getPostById = async (postId) => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("No token found");
    return { error: "Authorization token is required" };
  }

  try {
    const response = await axios.get(
      `http://localhost:3000/api/post/single/${postId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching post:", error);
    return { error: "Error fetching post" };
  }
};

export default getPostById;
