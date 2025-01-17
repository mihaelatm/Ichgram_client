import axios from "axios";

const token = localStorage.getItem("token");

const getUserPosts = async () => {
  try {
    const response = await axios.get("http://localhost:3333/posts/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

export default getUserPosts;
