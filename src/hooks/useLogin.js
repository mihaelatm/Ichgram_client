import { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginUser from "../helpers/loginUser";
import { useDispatch } from "react-redux";
import { setUsername } from "../redux/slices/usernameSlice";
import { setProfileLink } from "../redux/slices/profileLink";
import { setBio } from "../redux/slices/bioSlice";

const useLogin = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      const { token, username, profileLink, bio } = await loginUser(
        emailOrUsername,
        password
      );

      if (token) {
        localStorage.clear();

        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        localStorage.setItem("profileLink", profileLink);
        localStorage.setItem("bio", bio);

        dispatch(setUsername(username));
        dispatch(setProfileLink(profileLink));
        dispatch(setBio(bio));

        navigate("/home");
      } else {
        setError("Invalid login credentials");
      }
    } catch (err) {
      setError(err.message || "Login error. Please try again.");
      console.error("Login error:", err);
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
