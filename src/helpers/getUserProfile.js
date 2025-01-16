import axios from "axios";
import { jwtDecode } from "jwt-decode";

const getUserProfile = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("Token is missing");
    return;
  }

  try {
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id;

    const response = await axios.get(
      `http://localhost:3000/api/user/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = response.data;

    console.log("User profile data:", data);
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
};

export default getUserProfile;
