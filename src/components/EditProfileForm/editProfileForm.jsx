import { useSelector, useDispatch } from "react-redux";
import { setUsername } from "../../redux/slices/usernameSlice";
import { setProfileLink } from "../../redux/slices/profileLink";
import styles from "./editProfileForm.module.css";
import Button from "../Button/button";
import { useState } from "react";
import { setBio } from "../../redux/slices/bioSlice";
import link_icon from "../../assets/icons/link_icon.svg";
import { updateProfile } from "../../helpers/updateProfile";

function EditProfileForm() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username.username);
  const profileLink = useSelector((state) => state.profileLink.profileLink);
  const bio = useSelector((state) => state.bio.bio);
  const [aboutText, setAboutText] = useState(bio || "");
  const [error, setError] = useState(""); // State pentru mesaje de eroare

  const handleSave = async () => {
    const updatedUsername = document.getElementById("username").value;
    const updatedProfileLink = document.getElementById("website").value;

    if (!updatedUsername) {
      setError("Username cannot be empty");
      return;
    }

    const payload = {
      username: updatedUsername,
      bio: aboutText,
      profileLink: updatedProfileLink, // Include și profilul
    };

    try {
      const token = localStorage.getItem("token"); // Obținem token-ul din localStorage
      if (!token) {
        setError("User is not authenticated");
        return;
      }

      const result = await updateProfile(token, payload); // Apelăm funcția pentru actualizare
      console.log("Profil actualizat:", result);

      // Actualizăm state-ul Redux
      dispatch(setUsername(updatedUsername));
      dispatch(setProfileLink(updatedProfileLink));
      dispatch(setBio(aboutText));

      setError(""); // Resetăm eroarea după succes
    } catch (error) {
      setError(error.message || "Error updating profile");
    }
  };

  const handleTextChange = (e) => {
    let value = e.target.value;

    const lines = value.split("\n").map((line) => {
      if (line.trim() === "") return "";
      if (!line.startsWith("•")) {
        return "• " + line;
      }
      return line;
    });

    setAboutText(lines.join("\n"));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setAboutText((prevText) => {
        const lastLine = prevText.split("\n").pop();
        if (!lastLine || lastLine.trim() === "") {
          return prevText + "• ";
        }
        return prevText + "\n• ";
      });
    }
  };

  return (
    <div className={styles.container}>
      {error && <div className={styles.error}>{error}</div>}{" "}
      {/* Afișează mesajul de eroare */}
      <div className={styles.input}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" defaultValue={username} />

        <label htmlFor="website">Website</label>
        <div className={styles.input_with_icon}>
          <img src={link_icon} alt="icon" className={styles.icon} />
          <input type="text" id="website" defaultValue={profileLink} />
        </div>

        <div className={styles.input_with_span}>
          <label htmlFor="about">About</label>
          <div className={styles.input_container}>
            <textarea
              id="about"
              className={styles.about_textarea}
              value={aboutText}
              placeholder="Write something about yourself..."
              onChange={handleTextChange}
              onKeyDown={handleKeyDown}
            />
            <span className={styles.character_count}>
              {aboutText.length} / 150
            </span>
          </div>
          <Button
            text="Save"
            className={styles.save_button}
            onClick={handleSave}
          />
        </div>
      </div>
    </div>
  );
}

export default EditProfileForm;
