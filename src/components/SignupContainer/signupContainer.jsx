import ichgram_logo from "../../assets/images/ichgram_logo.svg";
import Button from "../Button/button";
import RegisterForm from "../RegisterForm/registerForm";
import styles from "./signupContainer.module.css";

function SignupContainer() {
  return (
    <section className={styles.signup_screen}>
      <div className={styles.signup_container}>
        <div className={styles.logo}>
          <img src={ichgram_logo} alt="ichgram_logo" />
        </div>
        <p className={styles.signup_text}>
          Sign up to see photos and videos from your friends.
        </p>

        <RegisterForm />

        <p className={styles.signup_link}>
          People who use our service may have uploaded your contact information
          to Instagram. <a href="#">Learn more</a>
        </p>

        <p className={styles.signup_link + " " + styles.terms}>
          By signing up, you agree to our
          <a href="#">Terms, Privacy Policy</a>
          and <a href="#">Cookies Policy.</a>
        </p>
      </div>
      <Button
        text="Sign up"
        route="/home"
        textColor="#FFFFFF"
        bgColor="#0095F6"
        width="268px"
        marginTop="7px"
        marginBottom="28px"
      />
    </section>
  );
}

export default SignupContainer;
