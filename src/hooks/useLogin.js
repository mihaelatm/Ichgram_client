import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginUser from "../helpers/loginUser";

const useLogin = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!emailOrUsername || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const token = await loginUser(emailOrUsername, password);

      if (token) {
        localStorage.setItem("token", token);
        navigate("/home");
      }
    } catch (err) {
      setError(err.message || "Login error");
    }
  };

  return {
    emailOrUsername,
    setEmailOrUsername,
    password,
    setPassword,
    showPassword,
    toggleShowPassword,
    error,
    handleLogin,
  };
};

export default useLogin;
