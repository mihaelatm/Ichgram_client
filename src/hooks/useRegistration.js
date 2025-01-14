// helpers/useRegistration.js
import { useState } from "react";
import registerUser from "../helpers/registerUser";

export const useRegistration = () => {
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

    try {
      const result = await registerUser(email, fullName, username, password);

      if (result.success) {
        setSuccessMessage(
          "Registration successful! Redirecting to login page..."
        );
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
