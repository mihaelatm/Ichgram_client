import SignupContainer from "../../components/SignupContainer/signupContainer";
import styles from "./register.module.css";
import LinkRoute from "../../components/LinkRoute/linkRoute";

function Register() {
  return (
    <section className={styles.signup_screen}>
      <SignupContainer />
      <LinkRoute text="Have an account?" path="/" auth="Log in" />
    </section>
  );
}

export default Register;
