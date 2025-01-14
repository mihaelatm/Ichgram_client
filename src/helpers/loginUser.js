import axios from "axios";

const loginUser = async (emailOrUsername, password) => {
  try {
    const response = await axios.post("http://localhost:3000/api/auth/login", {
      email: emailOrUsername,
      username: emailOrUsername,
      password,
    });

    return response.data.token;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Login error");
  }
};

export default loginUser;
