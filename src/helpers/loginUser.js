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

    const token = response.data.token;

    localStorage.setItem("authToken", token);

    return token;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Login error");
  }
};

export default loginUser;
