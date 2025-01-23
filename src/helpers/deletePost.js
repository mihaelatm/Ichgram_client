import axios from "axios";

const updatePost = async (postId, content, images) => {
  try {
    const formData = new FormData();
    formData.append("content", content);

    images.forEach((image, index) => {
      formData.append(`images[${index}]`, image); // Adăugăm fiecare imagine din array
    });

    const response = await axios.put(
      `http://localhost:3000/api/post/${postId}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    // Returnăm datele postării actualizate pentru a le folosi ulterior
    return response.data;
  } catch (error) {
    console.error("Error updating post", error.response.data);
    // Poți gestiona erorile aici (ex: afișarea unui mesaj în UI)
  }
};

export default updatePost;
