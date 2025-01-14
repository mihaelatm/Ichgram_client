import axios from "axios";

async function registerUser(email, fullName, username, password) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/auth/register",
      {
        email,
        full_name: fullName,
        username,
        password,
      }
    );

    return { success: true, data: response.data };
  } catch (error) {
    if (error.response) {
      const backendErrors = error.response.data.errors || {};
      return {
        success: false,
        errors: {
          email: backendErrors.email,
          username: backendErrors.username,
          password: backendErrors.password,
          message: error.response.data.message,
        },
      };
    } else {
      return {
        success: false,
        errors: { message: "An error occurred during registration" },
      };
    }
  }
}

export default registerUser;
