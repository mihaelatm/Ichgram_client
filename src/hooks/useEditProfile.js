import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsername } from "../redux/slices/usernameSlice";
import { setProfileLink } from "../redux/slices/profileLink";
import { setBio } from "../redux/slices/bioSlice";
import { updateProfile } from "../helpers/updateProfile";

const useEditProfile = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username.username);
  const profileLink = useSelector((state) => state.profileLink.profileLink);
  const bio = useSelector((state) => state.bio.bio);
  const profileImage = useSelector((state) => state.image.profile_image);

  const [aboutText, setAboutText] = useState(bio || "");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Timer pentru mesaje de succes
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const addBulletPoints = (text) => {
    const lines = text.split("\n").map((line) => {
      if (line.trim() && !line.startsWith("• ")) {
        return "• " + line.trim();
      } else if (!line.trim()) {
        return "";
      }
      return line;
    });
    return lines.join("\n");
  };

  const handleSave = async () => {
    const updatedUsername = document.getElementById("username").value;
    const updatedProfileLink = document.getElementById("website").value;

    if (!updatedUsername) {
      setError("Username cannot be empty");
      return;
    }

    const payload = {
      username: updatedUsername,
      bio: aboutText,
      profileLink: updatedProfileLink,
      profile_image: profileImage,
    };

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("User is not authenticated");
        return;
      }

      const result = await updateProfile(token, payload);

      dispatch(setUsername(updatedUsername));
      dispatch(setProfileLink(updatedProfileLink));
      dispatch(setBio(aboutText));

      localStorage.setItem("username", updatedUsername);
      localStorage.setItem("profileLink", updatedProfileLink);
      localStorage.setItem("bio", aboutText);

      setSuccessMessage("Profile updated successfully!");
      setError("");
    } catch (error) {
      setError(error.message || "Error updating profile");
      setSuccessMessage("");
    }
  };

  const handleTextChange = (e) => {
    const updatedText = addBulletPoints(e.target.value);
    setAboutText(updatedText);
  };

  return {
    username,
    profileLink,
    aboutText,
    error,
    successMessage,
    handleTextChange,
    handleSave,
  };
};

export default useEditProfile;
