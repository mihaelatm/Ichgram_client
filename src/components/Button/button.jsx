import styles from "./button.module.css";
import classNames from "classnames";

function Button({ text, className, onClick, type = "button" }) {
  return (
    <div className={styles.container}>
      <button
        type={type}
        className={classNames(styles.button, className)}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
