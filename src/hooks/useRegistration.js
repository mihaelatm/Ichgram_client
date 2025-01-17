import { useState } from "react";
import registerUser from "../helpers/registerUser";
import { useDispatch } from "react-redux";
import { setUsername } from "../redux/slices/usernameSlice";
import { setProfileLink } from "../redux/slices/profileLink";
import { v4 as uuidv4 } from "uuid";

export const useRegistration = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsernameLocal] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");

    if (!email || !fullName || !username || !password) {
      setErrors({ message: "All fields are required" });
      return;
    }

    if (password.length < 5) {
      setErrors({ password: "Password must be at least 5 characters long" });
      return;
    }

    const profileLink = `bit.ly/${uuidv4()}`;

    try {
      const result = await registerUser(
        email,
        fullName,
        username,
        password,
        profileLink
      );

      if (result.success) {
        setSuccessMessage(
          "Registration successful! Redirecting to login page..."
        );
        dispatch(setUsername(username));
        localStorage.setItem("username", username);
        dispatch(setProfileLink(profileLink));
        localStorage.setItem("profileLink", profileLink);
        return true;
      } else {
        setErrors(result.errors || { message: "Registration failed" });
      }
    } catch (error) {
      setErrors({ message: "An error occurred. Please try again." });
      console.error("Registration error:", error);
    }
  };

  return {
    email,
    setEmail,
    fullName,
    setFullName,
    username,
    setUsernameLocal,
    password,
    setPassword,
    errors,
    successMessage,
    handleSubmit,
  };
};
