import { Link, useNavigate } from "react-router-dom";
import styles from "./aboutProfile.module.css";
import UserActivity from "../UserActivity/userActivity";
import link_icon from "../../assets/icons/link_icon.svg";
import Button from "../Button/button";

function AboutProfile() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/edit_profile");
  };
  return (
    <div className={styles.about_content}>
      <div className={styles.about_profile}>
        <p className={styles.name}>itcareerhub</p>

        <Button
          text="Edit profile"
          className={styles.link_edit_profile}
          onClick={handleNavigate}
        />
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
