import styles from "./searchUserInput.module.css";
import clear_icon from "../../assets/icons/clear_icon.svg";

const SearchUserInput = ({ query, setQuery, handleClearSearch }) => {
  return (
    <div className={styles.input_wrapper}>
      <input
        type="text"
        name="search"
        placeholder="Search"
        className={styles.search_input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {query && (
        <img
          src={clear_icon}
          alt="clear_icon"
          className={styles.clear_icon}
          onClick={handleClearSearch}
        />
      )}
    </div>
  );
};

export default SearchUserInput;
