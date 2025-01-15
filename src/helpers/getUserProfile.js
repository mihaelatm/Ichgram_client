import axios from "axios";
import * as jwt_decode from "jwt-decode";

const getUserProfile = async (token) => {
  try {
    // Decodifici token-ul pentru a obține userId
    const decoded = jwt_decode(token);
    const userId = decoded.user_id;

    const response = await axios.get(
      `http://localhost:3000/api/user/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "Error fetching user profile:",
      error.response?.data || error.message
    );
    throw new Error("Error fetching user profile: " + error.message);
  }
};

export default getUserProfile;
