import axios from "axios";

const getUserPosts = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get("http://localhost:3000/api/post/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export default getUserPosts;
