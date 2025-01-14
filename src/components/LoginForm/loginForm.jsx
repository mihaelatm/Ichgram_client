import styles from "./loginForm.module.css";
import ichgram_logo from "../../assets/images/ichgram_logo.svg";
import Divider from "../Divider/divider";
import InputField from "../InputField/inputField";
import Button from "../Button/button";
import TogglePasswordButton from "../TooglePassword/tooglePasswordButton";
import { useState } from "react";
import ForgotPassword from "../ForgotPassword/forgotPassword";
import { useNavigate } from "react-router-dom"; // importă useNavigate
import { loginUser } from "../../helpers/loginHelper"; // importă funcția de login

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrUsername, setEmailOrUsername] = useState(""); // state pentru email/username
  const [password, setPassword] = useState(""); // state pentru parolă
  const [errorMessage, setErrorMessage] = useState(""); // state pentru mesajul de eroare
  const navigate = useNavigate(); // initializează useNavigate pentru redirecționare

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await loginUser(emailOrUsername, password); // apelăm funcția de login din helper
      localStorage.setItem("token", token); // stocăm token-ul în localStorage
      navigate("/home"); // redirecționăm utilizatorul către pagina home
    } catch (error) {
      setErrorMessage(error.message); // afișăm eroarea din helper
    }
  };

  return (
    <div className={styles.form_container}>
      <div className={styles.logo}>
        <img src={ichgram_logo} alt="ichgram_logo" />
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Username or email"
          className={styles.input}
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)} // actualizează valoarea
        />
        <div className={styles.password_wrapper}>
          <InputField
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)} // actualizează valoarea
          />
          <TogglePasswordButton
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
            onToggle={() => setShowPassword((prev) => !prev)}
          />
        </div>
        {errorMessage && <p className={styles.error_message}>{errorMessage}</p>}{" "}
        {/* Afișează eroarea dacă există */}
        <Button
          type="submit"
          text="Log in"
          textColor="#FFFFFF"
          bgColor="#0095F6"
          width="268px"
          marginTop="7px"
          marginBottom="28px"
        />
      </form>

      <Divider />
      <ForgotPassword />
    </div>
  );
};

export default LoginForm;
