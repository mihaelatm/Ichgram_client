import ichgram_logo from "../../assets/images/ichgram_logo.svg";
import RegisterForm from "../RegisterForm/registerForm";
import styles from "./signupContainer.module.css";

function SignupContainer() {
  return (
    <div className={styles.signup_screen}>
      <div className={styles.signup_container}>
        <div className={styles.logo}>
          <img src={ichgram_logo} alt="ichgram_logo" />
        </div>
        <p className={styles.signup_text}>
          Sign up to see photos and videos from your friends.
        </p>

        <RegisterForm />
      </div>
    </div>
  );
}

export default SignupContainer;
