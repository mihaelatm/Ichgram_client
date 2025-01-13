import styles from "./tooglePasswordButton.module.css";

const TogglePasswordButton = ({ showPassword, toggleShowPassword }) => {
  return (
    <button
      type="button"
      className={styles.toggle_password}
      onClick={toggleShowPassword}
    >
      {showPassword ? "🙈" : "👁️"}
    </button>
  );
};

export default TogglePasswordButton;
