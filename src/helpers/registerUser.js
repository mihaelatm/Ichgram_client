import axios from "axios";

async function registerUser(email, fullName, username, password, profileLink) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/auth/register",
      {
        email,
        full_name: fullName,
        username,
        password,
        profile_link: profileLink,
      }
    );

    return { success: true, data: response.data };
  } catch (error) {
    if (error.response) {
      return {
        success: false,
        errors: {
          message: error.response.data.message || "An error occurred.",
        },
      };
    } else {
      return {
        success: false,
        errors: { message: "An error occurred during registration." },
      };
    }
  }
}

export default registerUser;
