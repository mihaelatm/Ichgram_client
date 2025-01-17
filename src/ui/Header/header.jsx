import { useState } from "react";
import styles from "./header.module.css";
import ichgram_logo from "../../assets/images/ichgram_logo.svg";
import { NavLink } from "react-router-dom";
import links from "../../utils/links";
import WindowModal from "../../components/WindowModal/windowModal";
import border_profile_icon from "../../assets/icons/border_profile_icon.svg";

function Header({ userProfileImage }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true); // Deschide fereastra modală
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Închide fereastra modală
  };

  return (
    <section className={styles.header}>
      <div>
        <img
          src={ichgram_logo}
          alt="ichgram_logo"
          className={styles.ichgram_logo}
        />
      </div>

      <div className={styles.links}>
        {links.map(({ to, label, icon, filledIcon }) => (
          <div key={label}>
            {to ? (
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={isActive && filledIcon ? filledIcon : icon}
                      alt={`${label}_icon`}
                    />
                    <span>{label}</span>
                  </>
                )}
              </NavLink>
            ) : (
              // Butonul "Create" care deschide fereastra modală
              <div onClick={handleModalOpen} className={styles.link}>
                <img src={icon} alt={`${label}_icon`} />
                <span>{label}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.profileLink}>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          {({ isActive }) => (
            <>
              <div className={styles.profileImageWrapper}>
                <img
                  alt="profile_icon"
                  className={styles.profile}
                  src={userProfileImage || border_profile_icon}
                />
              </div>
              <span>Profile</span>
            </>
          )}
        </NavLink>
      </div>

      {/* Randare condiționată a ferestrei modale */}
      {isModalOpen && <WindowModal onClose={handleModalClose} />}
    </section>
  );
}

export default Header;
