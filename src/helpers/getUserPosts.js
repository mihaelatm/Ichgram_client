import axios from "axios";
import { jwtDecode } from "jwt-decode";

const getUserPosts = async (userId = null) => {
  const token = localStorage.getItem("token");

  try {
    // Dacă nu este furnizat un userId, folosește ID-ul utilizatorului logat
    if (!userId) {
      if (!token) {
        throw new Error("Token is missing. Please log in.");
      }

      const decodedToken = jwtDecode(token);
      userId = decodedToken.id; // ID-ul utilizatorului logat
    }

    // Face cererea către backend pentru postările utilizatorului specificat
    const response = await axios.get(`http://localhost:3000/api/post/all`, {
      params: { userId }, // Trimite userId ca query param
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data; // Returnează postările
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

export default getUserPosts;
