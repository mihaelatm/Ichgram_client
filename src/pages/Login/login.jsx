import Ichgram from "../../assets/images/ichgram.png";
import LoginForm from "../../components/LoginForm/loginForm";
import styles from "./login.module.css";
import LinkRoute from "../../components/LinkRoute/linkRoute";

function Login() {
  return (
    <section className={styles.login_screen}>
      <div>
        <img src={Ichgram} alt="Ichgram" />
      </div>
      <div>
        <LoginForm />
        <LinkRoute
          text="Don't have an account?"
          path="/register"
          auth="Sign up"
        />
      </div>
    </section>
  );
}

export default Login;
