import { useNavigate } from "react-router-dom";
import Button from "../Button/button";
import "/src/styles/globalStyles.css";
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
    <div className="about_content">
      <div className="about_profile">
        {username && <p className="username">{username}</p>}
        <Button
          text="Edit profile"
          className="link_edit_profile"
          onClick={handleNavigate}
        />
      </div>

      <div className="activity_container">
        <UserActivity />
      </div>

      <div className="about_info">
        {bio && (
          <div className="bio">
            <p>{bio}</p>
          </div>
        )}
      </div>

      <div className="link">
        <img src={link_icon} alt="link_icon" />
        <p
          className="link_text"
          onClick={handleLinkClick}
          style={{ cursor: "pointer" }}
        >
          {isExpanded ? profileLink : `${profileLink?.substring(0, 14)}...`}
        </p>
      </div>
    </div>
  );
}

export default AboutProfile;
