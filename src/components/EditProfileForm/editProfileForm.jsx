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
  const [aboutText, setAboutText] = useState(bio || ""); // Setează valoarea inițială din Redux
  const [error, setError] = useState(""); // State pentru mesaje de eroare

  // Funcția care adaugă punctulețul la începutul fiecărei linii, dar doar dacă linia nu este goală
  const addBulletPoints = (text) => {
    const lines = text.split("\n").map((line) => {
      if (line.trim() && !line.startsWith("• ")) {
        return `• ${line.trim()}`;
      } else if (!line.trim()) {
        return ""; // Permite linii goale fără punctulețe
      }
      return line;
    });
    return lines.join("\n");
  };

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
      profileLink: updatedProfileLink,
    };

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("User is not authenticated");
        return;
      }

      // Salvează datele în baza de date
      const result = await updateProfile(token, payload);

      // Dacă actualizarea în baza de date este un succes, actualizează Redux și localStorage
      dispatch(setUsername(updatedUsername));
      dispatch(setProfileLink(updatedProfileLink));
      dispatch(setBio(aboutText));

      // Salvează datele și în localStorage pentru a persista după reîncărcarea paginii
      localStorage.setItem("username", updatedUsername);
      localStorage.setItem("profileLink", updatedProfileLink);
      localStorage.setItem("bio", aboutText);

      setError(""); // Resetăm eroarea după succes
    } catch (error) {
      setError(error.message || "Error updating profile");
    }
  };

  const handleTextChange = (e) => {
    // Aplicați logica de adăugare a punctulețelor la textul introdus
    const updatedText = addBulletPoints(e.target.value);
    setAboutText(updatedText);
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
