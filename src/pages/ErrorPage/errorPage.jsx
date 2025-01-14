import styles from "./errorPage.module.css";
import ichgram from "../../assets/images/ichgram.png";

function ErrorPage() {
  return (
    <div className={styles.error_page}>
      <div className={styles.error_image}>
        <img src={ichgram} alt="ichgram" />
      </div>

      <div className={styles.error_text}>
        <h1 className={styles.error_title}>Oops! Page Not Found (404 Error)</h1>
        <p className={styles.error_message}>
          We're sorry, but the page you're looking for doesn't seem to exist. If
          you typed the URL manually, please double-check the spelling. If you
          clicked on a link, it may be outdated or broken.
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
