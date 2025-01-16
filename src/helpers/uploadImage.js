import axios from "axios";

const uploadImage = async (file) => {
  const token = localStorage.getItem("token");
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await axios.post(
      "http://localhost:3000/api/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export default uploadImage;
