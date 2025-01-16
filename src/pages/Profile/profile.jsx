import { useState } from "react";
import ProfileHeader from "../../components/ProfileHeader/profileHeader";
import ProfilePosts from "../../components/ProfilePosts/profilePosts";
import WindowModal from "../../components/WindowModal/windowModal"; // importă componenta modal
import styles from "./profile.module.css";

function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false); // starea pentru a controla vizibilitatea ferestrei modal

  const handleOpenModal = () => {
    setIsModalOpen(true); // deschide fereastra
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // închide fereastra
  };

  return (
    <div className={styles.profile}>
      <ProfileHeader onOpenModal={handleOpenModal} />{" "}
      {/* pasează funcția pentru a deschide modalul */}
      <ProfilePosts />
      {/* Afișează fereastra doar dacă starea este true */}
      {isModalOpen && <WindowModal onCloseModal={handleCloseModal} />}
    </div>
  );
}

export default Profile;
