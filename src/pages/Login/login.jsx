import Ichgram from "../../assets/images/ichgram.png";
import LoginForm from "../../components/LoginForm/loginForm";
import Link from "../../components/Links/links";
import styles from "./login.module.css";

function Login() {
  return (
    <section className={styles.login_screen}>
      <div>
        <img src={Ichgram} alt="Ichgram" />
      </div>
      <div>
        <LoginForm />
        <Link text="Don't have an account?" path="/register" auth="Sign up" />
      </div>
    </section>
  );
}

export default Login;
