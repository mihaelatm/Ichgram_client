import axios from "axios";

const loginUser = async (emailOrUsername, password) => {
  try {
    const body = emailOrUsername.includes("@")
      ? { email: emailOrUsername, password }
      : { username: emailOrUsername, password };

    const response = await axios.post(
      "http://localhost:3000/api/auth/login",
      body
    );

    const { token, username, profileLink, bio, profile_image } = response.data;

    if (!token) {
      throw new Error("Token not received. Please try again.");
    }

    localStorage.setItem("token", token);

    return { token, username, profileLink, bio, profile_image };
  } catch (err) {
    const errorMessage =
      err.response?.data?.message || err.message || "Login error";
    throw new Error(errorMessage);
  }
};

export default loginUser;
