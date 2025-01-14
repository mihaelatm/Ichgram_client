import axios from "axios";

const getUserProfile = async (userId) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/user/${userId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error fetching user profile: " + error.message);
  }
};

export default getUserProfile;
