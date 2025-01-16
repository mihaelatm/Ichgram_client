// src/hooks/useAboutProfile.js

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsername } from "../redux/slices/usernameSlice";
import { setProfileLink } from "../redux/slices/profileLink";
import { setBio } from "../redux/slices/bioSlice";

const useAboutProfile = () => {
  const dispatch = useDispatch();

  const username = useSelector((state) => state.username.username);
  const profileLink = useSelector((state) => state.profileLink.profileLink);
  const bio = useSelector((state) => state.bio.bio);

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

  const handleLinkClick = () => {
    setIsExpanded(!isExpanded);
  };

  return {
    username,
    profileLink,
    bio,
    isExpanded,
    handleLinkClick,
  };
};

export default useAboutProfile;
