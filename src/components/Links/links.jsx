import styles from "./links.module.css";
import { Link } from "react-router-dom";

function Links({ text, path, auth }) {
  return (
    <div className={styles.sign_up}>
      <p>{text}</p>
      <Link to={path} className={styles.sign_up_link}>
        {auth}
      </Link>
    </div>
  );
}

export default Links;
