import styles from "./button.module.css";
import classNames from "classnames";

function Button({ text, className, onClick, type = "button" }) {
  return (
    <button
      type={type}
      className={classNames(styles.button, className)}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
