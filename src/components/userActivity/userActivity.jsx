import { useSelector } from "react-redux";
import { selectPostCount } from "../../redux/slices/postSlice";
import "/src/styles/globalStyles.css";

function UserActivity() {
  // Obținem numărul total de postări folosind selectorul din Redux
  const postCount = useSelector(selectPostCount);

  return (
    <div className="profile_content">
      <div className="stat">
        <p className="stat_number">{postCount}</p>
        <p className="stat_label">posts</p>
      </div>
      <div className="stat">
        <p className="stat_number">0</p>
        <p className="stat_label">followers</p>
      </div>
      <div className="stat">
        <p className="stat_number">0</p>
        <p className="stat_label">following</p>
      </div>
    </div>
  );
}

export default UserActivity;
