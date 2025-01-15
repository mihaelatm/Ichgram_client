import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Button/button";
import styles from "./aboutProfile.module.css";
import UserActivity from "../userActivity/userActivity";
import link_icon from "../../assets/icons/link_icon.svg";
import { useState, useEffect } from "react";
import { setUsername } from "../../redux/slices/usernameSlice";
import { setProfileLink } from "../../redux/slices/profileLink";
import { setBio } from "../../redux/slices/bioSlice"; // importă setBio

function AboutProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const username = useSelector((state) => state.username.username);
  const profileLink = useSelector((state) => state.profileLink.profileLink);
  const bio = useSelector((state) => state.bio.bio); // accesează bio-ul din Redux

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedProfileLink = localStorage.getItem("profileLink");
    const storedBio = localStorage.getItem("bio");

    if (storedUsername && !username) {
      dispatch(setUsername(storedUsername));
    }
    if (storedProfileLink && !profileLink) {
      dispatch(setProfileLink(storedProfileLink));
    }
    if (storedBio && !bio) {
      dispatch(setBio(storedBio)); // setează bio-ul în Redux
    }
  }, [dispatch, username, profileLink, bio]);

  const handleNavigate = () => {
    navigate("/edit_profile");
  };

  const handleLinkClick = () => {
    setIsExpanded(!isExpanded);
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
