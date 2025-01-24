import { useNavigate } from "react-router-dom";
import styles from "./searchUsers.module.css";
import useSearchUsers from "../../hooks/useSearchUsers";
import RecentUsersList from "../../components/RecentUsersList/recentUsersList";
import SearchUserInput from "../../components/SearchUserInput/searchUserInput";

const SearchUsers = ({ setIsOpen }) => {
  const navigate = useNavigate();
  const { query, setQuery, recentUsers, isSearching, handleClearSearch } =
    useSearchUsers();

  const handleUserClick = (userId) => {
    setQuery("");
    navigate(`/user/${userId}`);
  };

  return (
    <div className={styles.search_container}>
      <h2 className={styles.search_title}>Search</h2>
      <SearchUserInput
        query={query}
        setQuery={setQuery}
        handleClearSearch={handleClearSearch}
      />
      <RecentUsersList
        recentUsers={recentUsers}
        isSearching={isSearching}
        handleUserClick={handleUserClick}
      />
    </div>
  );
};

export default SearchUsers;
