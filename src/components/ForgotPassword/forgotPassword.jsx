import { Link } from "react-router-dom";
import styles from "./forgotPassword.module.css";

function ForgotPassword() {
  return (
    <div className={styles.container}>
      <Link to="/password_reset" className={styles.forgot_password}>
        Forgot password?
      </Link>
    </div>
  );
}

export default ForgotPassword;
