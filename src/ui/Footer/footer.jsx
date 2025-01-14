import { Link } from "react-router-dom";
import styles from "./footer.module.css";

function Footer() {
  return (
    <nav className={styles.footer_container}>
      <div className={styles.footer}>
        <Link to="/home" className={styles.nav_link}>
          Home
        </Link>
        <Link to="/home" className={styles.nav_link}>
          Search
        </Link>
        <Link to="/home" className={styles.nav_link}>
          Explore
        </Link>
        <Link to="/home" className={styles.nav_link}>
          Messages
        </Link>
        <Link to="/home" className={styles.nav_link}>
          Notifications
        </Link>
        <Link to="/home" className={styles.nav_link}>
          Create
        </Link>
      </div>
      <p className={styles.copyright}>© 2024 ICHgram</p>
    </nav>
  );
}

export default Footer;
