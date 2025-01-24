import axios from "axios";

const getFollowersUser = async (userId) => {
  try {
    const response = await axios.get(
      `/api/follow/${userId}/followers`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error following user:", error);
    throw error;
  }
};

export default getFollowersUser;
