import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../Button/button";
import styles from "./aboutProfile.module.css";
import UserActivity from "../userActivity/userActivity";
import link_icon from "../../assets/icons/link_icon.svg";

function AboutProfile() {
  const navigate = useNavigate();

  // Accesăm username din Redux
  const username = useSelector((state) => state.username.username);

  // Preluăm username din localStorage dacă nu există în Redux
  const storedUsername = localStorage.getItem("username");

  // Folosim username-ul din Redux dacă există, altfel din localStorage
  const displayUsername = username || storedUsername;

  const handleNavigate = () => {
    navigate("/edit_profile");
  };

  return (
    <div className={styles.about_content}>
      <div className={styles.about_profile}>
        {/* Afișăm username-ul */}
        {displayUsername && (
          <p className={styles.username}>{displayUsername}</p>
        )}

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
          <li>Information about the user</li>
          <li>
            <span>more</span>
          </li>
        </ul>
        <div className={styles.link}>
          <img src={link_icon} alt="link_icon" />
          <p className={styles.link_text}>Additional user links</p>
        </div>
      </div>
    </div>
  );
}

export default AboutProfile;
