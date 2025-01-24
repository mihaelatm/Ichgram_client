import axios from "axios";

const searchUsers = async (query, token) => {
  try {
    const response = await axios.get("http://localhost:3000/api/search/users", {
      params: { query },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response && response.data) {
      return response.data.data;
    } else {
      throw new Error("No data found in response");
    }
  } catch (error) {
    console.error(
      "Error searching users:",
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

export default searchUsers;
