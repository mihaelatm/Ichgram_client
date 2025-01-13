import styles from "./button.module.css";
import { useNavigate } from "react-router-dom";

function Button({
  text,
  onClick,
  textColor,
  bgColor,
  width,
  route,
  marginTop,
  marginBottom,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (route) {
      navigate(route);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div className={styles.button_container}>
      <button
        onClick={handleClick}
        className={styles.button} // aplici stilurile din CSS
        style={{
          backgroundColor: bgColor,
          color: textColor,
          width: width,
          marginTop: marginTop,
          marginBottom: marginBottom,
        }} // stilurile inline pentru personalizare
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
