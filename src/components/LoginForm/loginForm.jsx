import styles from "./loginForm.module.css";
import ichgram_logo from "../../assets/images/ichgram_logo.svg";
import Divider from "../Divider/divider";
import InputField from "../InputField/inputField";
import Button from "../Button/button";
import TogglePasswordButton from "../TooglePassword/tooglePasswordButton";
import { useState } from "react";
import ForgotPassword from "../ForgotPassword/forgotPassword";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={styles.form_container}>
      <div className={styles.logo}>
        <img src={ichgram_logo} alt="ichgram_logo" />
      </div>
      <form className={styles.form}>
        <InputField
          type="text"
          placeholder="Username or email"
          className={styles.input}
        />
        <div className={styles.password_wrapper}>
          <InputField placeholder="Password" className={styles.input} />
          <TogglePasswordButton
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
            onToggle={() => setShowPassword((prev) => !prev)}
          />
        </div>

        <Button
          text="Log in"
          route="/home"
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
