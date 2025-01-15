import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../Button/button";
import styles from "./aboutProfile.module.css";
import UserActivity from "../userActivity/userActivity";
import link_icon from "../../assets/icons/link_icon.svg";

function AboutProfile() {
  const navigate = useNavigate();

  const username = useSelector((state) => state.username.username);
  const storedUsername = localStorage.getItem("username");
  const displayUsername = username || storedUsername;

  // Preluăm link-ul din Redux sau localStorage
  const profileLink =
    useSelector((state) => state.profileLink.profileLink) ||
    localStorage.getItem("profileLink");

  // Extragerea UUID-ului din link-ul complet
  const displayProfileLink = profileLink
    ? profileLink.split("/").pop() // obține UUID-ul
    : null;

  const handleNavigate = () => {
    navigate("/edit_profile");
  };

  return (
    <div className={styles.about_content}>
      <div className={styles.about_profile}>
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
          <p className={styles.link_text}>
            {displayProfileLink
              ? `bit.ly/${displayProfileLink}`
              : "No profile link available"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutProfile;
