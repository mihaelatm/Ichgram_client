import axios from "axios";
import jwt_decode from "jwt-decode";

const getUserProfile = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.error("Token is missing");
    return;
  }

  try {
    // Decodifică token-ul pentru a extrage userId
    const decodedToken = jwt_decode(token);
    const userId = decodedToken.id; // Presupunând că id-ul utilizatorului este în token

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
    // Salvează datele utilizatorului în Redux sau în starea locală
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
};

export default getUserProfile;
