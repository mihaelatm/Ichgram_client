import axios from "axios";

export const loginUser = async (emailOrUsername, password) => {
  try {
    const response = await axios.post("hhttp://localhost:3000/api/auth/login", {
      email: emailOrUsername,
      password,
    });
    return response.data.token;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.errors.message);
    } else {
      throw new Error("An error occurred. Please try again later.");
    }
  }
};
