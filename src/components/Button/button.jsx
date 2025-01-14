import styles from "./button.module.css";

function Button({ text }) {
  return (
    <div className={styles.container}>
      <button type="submit" className={styles.login_button}>
        {text}
      </button>
    </div>
  );
}

export default Button;
