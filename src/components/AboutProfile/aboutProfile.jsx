import { Link } from "react-router-dom";
import styles from "./aboutProfile.module.css";
import UserActivity from "../UserActivity/userActivity";
import link_icon from "../../assets/icons/link_icon.svg";

function AboutProfile() {
  return (
    <div className={styles.about_content}>
      <div className={styles.about_profile}>
        <p className={styles.name}>itcareerhub</p>
        <Link to="/edit_profile">
          <button className={styles.link_edit_profile}>Edit profile</button>
        </Link>
      </div>
      <div className={styles.activity_container}>
        <UserActivity />
      </div>

      <div className={styles.about_info}>
        <ul>
          <li> Гарантия помощи с трудоустройством в ведущие IT-компании</li>
          <li>
            Выпускники зарабатывают от 45к евро <br /> БЕСПЛАТНАЯ ...
            <span>more</span>
          </li>
        </ul>
        <div className={styles.link}>
          <img src={link_icon} alt="link_icon" />
          <p className={styles.link_text}>bit.ly/3rpiIbh</p>
        </div>
      </div>
    </div>
  );
}

export default AboutProfile;
