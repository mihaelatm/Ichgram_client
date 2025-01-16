// src/components/AboutProfile/AboutProfile.js

import { useNavigate } from "react-router-dom";
import Button from "../Button/button";
import styles from "./aboutProfile.module.css";
import UserActivity from "../userActivity/userActivity";
import link_icon from "../../assets/icons/link_icon.svg";
import useAboutProfile from "../../hooks/useAboutProfile";

function AboutProfile() {
  const navigate = useNavigate();
  const { username, profileLink, bio, isExpanded, handleLinkClick } =
    useAboutProfile();

  const handleNavigate = () => {
    navigate("/edit_profile");
  };

  return (
    <div className={styles.about_content}>
      <div className={styles.about_profile}>
        {username && <p className={styles.username}>{username}</p>}
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
        {bio && (
          <div className={styles.bio}>
            <p>{bio}</p>
          </div>
        )}
      </div>

      <div className={styles.link}>
        <img src={link_icon} alt="link_icon" />
        <p
          className={styles.link_text}
          onClick={handleLinkClick}
          style={{ cursor: "pointer" }}
        >
          {isExpanded ? profileLink : `${profileLink?.substring(0, 7)}...`}
        </p>
      </div>
    </div>
  );
}

export default AboutProfile;
