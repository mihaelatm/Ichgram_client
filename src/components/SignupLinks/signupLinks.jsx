import styles from "./signupLinks.module.css";

function SignupLinks() {
  return (
    <div className={styles.signup_link_container}>
      <p className={styles.signup_link}>
        People who use our service may have uploaded your contact information to
        Instagram. <a href="#">Learn more</a>
      </p>

      <p className={`${styles.signup_link} ${styles.terms}`}>
        By signing up, you agree to our
        <a href="#">Terms, Privacy Policy</a>
        and <a href="#">Cookies Policy.</a>
      </p>
    </div>
  );
}

export default SignupLinks;
