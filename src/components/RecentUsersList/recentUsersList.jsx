import styles from "./recentUsersList.module.css";
import border_profile_icon from "../../assets/icons/border_profile_icon.svg";

const RecentUsersList = ({ recentUsers, isSearching, handleUserClick }) => {
  return (
    <div className={styles.search_result}>
      <h3 className={styles.result_title}>Recent</h3>
      {isSearching ? (
        <p>Searching...</p>
      ) : (
        <div className={styles.result_list}>
          {recentUsers.map((user) => (
            <div
              key={user._id}
              className={styles.result_item}
              onClick={() => handleUserClick(user._id)}
            >
              <img
                src={user.profile_image || border_profile_icon}
                alt={user.username}
                className={styles.profile_image}
              />
              <p>{user.username}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentUsersList;
