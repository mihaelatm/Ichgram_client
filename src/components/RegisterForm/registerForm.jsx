import { useState } from "react";
import InputField from "../InputField/inputField";
import styles from "./registerForm.module.css";
import registerUser from "../../helpers/registerUser";
import { useNavigate } from "react-router-dom";
import Button from "../Button/button";
import SignupLinks from "../SignupLinks/signupLinks";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsernameLocal] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

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
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        setErrors(result.errors || { message: "Registration failed" });
      }
    } catch (error) {
      setErrors({ message: "An error occurred. Please try again." });
      console.error("Registration error:", error);
    }
  };

  return (
    <form className={styles.register_form} onSubmit={handleSubmit}>
      <div>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className={styles.error}>{errors.email}</p>}
      </div>

      <div>
        <InputField
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        {errors.fullName && <p className={styles.error}>{errors.fullName}</p>}
      </div>

      <div>
        <InputField
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsernameLocal(e.target.value)}
        />
        {errors.username && <p className={styles.error}>{errors.username}</p>}
      </div>

      <div>
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className={styles.error}>{errors.password}</p>}
      </div>

      {errors.message && <p className={styles.error}>{errors.message}</p>}

      <SignupLinks />
      <Button
        type="submit"
        text="Sign up"
        textColor="#ffffff"
        bgColor="#0095F6"
        width="268px"
        marginTop="7px"
        marginBottom="28px"
      />

      {successMessage && <p className={styles.success}>{successMessage}</p>}
    </form>
  );
}

export default RegisterForm;
