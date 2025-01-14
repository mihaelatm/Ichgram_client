import styles from "./loginForm.module.css";
import ichgram_logo from "../../assets/images/ichgram_logo.svg";
import Divider from "../Divider/divider";
import InputField from "../InputField/inputField";
import Button from "../Button/button";
import TogglePasswordButton from "../TooglePassword/tooglePasswordButton";
import ForgotPassword from "../ForgotPassword/forgotPassword";
import useLogin from "../../hooks/useLogin";

const LoginForm = () => {
  const {
    emailOrUsername,
    setEmailOrUsername,
    password,
    setPassword,
    showPassword,
    toggleShowPassword,
    error,
    handleLogin,
  } = useLogin();

  return (
    <div className={styles.form_container}>
      <div className={styles.logo}>
        <img src={ichgram_logo} alt="ichgram_logo" />
      </div>
      <form className={styles.form} onSubmit={handleLogin}>
        <InputField
          type="text"
          placeholder="Email or username"
          className={styles.input}
          value={emailOrUsername}
          onChange={(e) => setEmailOrUsername(e.target.value)}
        />
        <div className={styles.password_wrapper}>
          <InputField
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TogglePasswordButton
            showPassword={showPassword}
            onToggle={toggleShowPassword}
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.button_container}>
          <Button type="submit" text="Log in" className={styles.login_button} />
        </div>
      </form>

      <Divider />
      <ForgotPassword />
    </div>
  );
};

export default LoginForm;
