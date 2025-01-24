import axios from "axios";

const followUser = async (targetUserId, token) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/api/follow/${targetUserId}/follow`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error following user:", error);
    throw error;
  }
};

export default followUser;
