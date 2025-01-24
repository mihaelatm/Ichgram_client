import { useSelector } from "react-redux";
import { selectPostCount } from "../../redux/slices/postSlice";
import "/src/styles/globalStyles.css";

function UserActivity() {
  const postCount = useSelector(selectPostCount);
  const followersCount = useSelector((state) => state.user.followers_count); // Presupunem că ai un slice pentru user
  const followingCount = useSelector((state) => state.user.following_count); // Presupunem că ai un slice pentru user

  return (
    <div className="profile_content">
      <div className="stat">
        <p className="stat_number">{postCount}</p>
        <p className="stat_label">posts</p>
      </div>
      <div className="stat">
        <p className="stat_number">{followersCount}</p>
        <p className="stat_label">followers</p>
      </div>
      <div className="stat">
        <p className="stat_number">{followingCount}</p>
        <p className="stat_label">following</p>
      </div>
    </div>
  );
}

export default UserActivity;
