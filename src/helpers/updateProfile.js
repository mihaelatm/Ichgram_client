import axios from "axios";

export const updateProfile = async (token, payload) => {
  try {
    if (!token) {
      throw new Error("User is not authenticated");
    }

    const response = await axios.put(
      "http://localhost:3000/api/user/update",
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.error("Update failed:", err);
    throw new Error(err.response?.data?.message || "Error updating profile");
  }
};
