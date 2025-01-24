import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getUserProfile from "../helpers/getUserProfile";
import getUserPosts from "../helpers/getUserPosts";
import followUser from "../helpers/followUser";
import { setOtherUserPosts } from "../redux/slices/otherUserPostsSlice";
import { selectOtherUserPostCount } from "../redux/slices/otherUserPostsSlice";
import {
  decrementFollowersCount,
  incrementFollowersCount,
} from "../redux/slices/followSlice";

export const useOtherProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followLoading, setFollowLoading] = useState(false);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const dispatch = useDispatch();
  const postsCount = useSelector(selectOtherUserPostCount);

  useEffect(() => {
    const fetchProfileAndPosts = async () => {
      try {
        const userData = await getUserProfile(userId);
        setUser(userData.data);

        // Actualizează starea locală cu numărul de followers și following
        setFollowersCount(userData.data.followers_count);
        setFollowingCount(userData.data.following_count);

        // Verifică dacă utilizatorul curent îl urmărește pe targetUser
        if (userData.data.is_followed) {
          setIsFollowing(true);
        }

        const userPosts = await getUserPosts(userId);
        setPosts(userPosts);
        dispatch(setOtherUserPosts(userPosts));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileAndPosts();
  }, [userId, dispatch]);

  const handleFollow = async () => {
    setFollowLoading(true);
    try {
      const token = localStorage.getItem("token");
      await followUser(userId, token);

      // Actualizează starea locală
      setIsFollowing((prev) => !prev);

      // Actualizează numărul de followers în Redux
      if (isFollowing) {
        dispatch(decrementFollowersCount());
      } else {
        dispatch(incrementFollowersCount());
      }
    } catch (err) {
      console.error("Error following/unfollowing user", err);
    } finally {
      setFollowLoading(false);
    }
  };

  return {
    user,
    loading,
    error,
    posts,
    isFollowing,
    followLoading,
    postsCount,
    followersCount,
    followingCount,
    handleFollow,
  };
};
