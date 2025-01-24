import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import searchUsers from "../helpers/searchUsers";

const useSearchUsers = () => {
  const [query, setQuery] = useState("");
  const [recentUsers, setRecentUsers] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("recentUsers"));
    if (savedUsers) {
      setRecentUsers(savedUsers);
    }
  }, []);

  useEffect(() => {
    if (query) {
      handleSearch();
    }
  }, [query]);

  const handleSearch = async () => {
    setIsSearching(true);
    try {
      const token = localStorage.getItem("token");
      const users = await searchUsers(query, token);

      setRecentUsers((prevUsers) => {
        const newUsers = users.filter(
          (user) => !prevUsers.some((u) => u._id === user._id)
        );
        const updatedUsers = [...newUsers, ...prevUsers].slice(0, 10);

        // Salvează în localStorage
        localStorage.setItem("recentUsers", JSON.stringify(updatedUsers));

        return updatedUsers;
      });
    } catch (error) {
      toast.error("There was an error searching for users.");
    } finally {
      setIsSearching(false);
    }
  };

  const handleClearSearch = () => {
    setQuery("");
    setRecentUsers([]);
    localStorage.removeItem("recentUsers");
  };

  return {
    query,
    setQuery,
    recentUsers,
    isSearching,
    handleClearSearch,
  };
};

export default useSearchUsers;
