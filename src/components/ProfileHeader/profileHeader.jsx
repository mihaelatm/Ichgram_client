import "/src/styles/globalStyles.css";
import ProfileImage from "../ProfileImage/profileImage";
import AboutProfile from "../AboutProfile/aboutProfile";

function ProfileHeader() {
  return (
    <div className="profile">
      <ProfileImage />
      <AboutProfile />
    </div>
  );
}

export default ProfileHeader;
