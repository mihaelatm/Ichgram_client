import axios from "axios";
import { jwtDecode } from "jwt-decode";

const getUserProfile = async (userId = null) => {
  const token = localStorage.getItem("token");

  try {
    // If no userId is provided, use the ID from the token
    if (!userId) {
      if (!token) {
        throw new Error("Token is missing. Please log in.");
      }

      const decodedToken = jwtDecode(token);
      if (!decodedToken.user_id) {
        // Check for user_id instead of id
        throw new Error("User ID is missing in the token.");
      }

      userId = decodedToken.user_id; // Use user_id instead of id
    }

    // Make the request to the backend
    const response = await axios.get(
      `http://localhost:3000/api/user/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw error;
  }
};

export default getUserProfile;
