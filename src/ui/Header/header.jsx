import { useState } from "react";
import styles from "./header.module.css";
import ichgram_logo from "../../assets/images/ichgram_logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import links from "../../utils/links";
import WindowModal from "../../components/WindowModal/windowModal";
import border_profile_icon from "../../assets/icons/border_profile_icon.svg";
import { useSelector } from "react-redux";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Selectează imaginea de profil din Redux (sau din prop)
  const userProfileImage = useSelector((state) => state.image.profile_image);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate("/profile");
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
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
                onClick={handleModalOpen}
              >
                <img src={icon} alt={`${label}_icon`} />
                <span>{label}</span>
              </NavLink>
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
              <div className={styles.profile_image_wrapper}>
                <div className={styles.profile_border}>
                  <img
                    alt="profile_icon"
                    className={styles.profile}
                    src={userProfileImage || border_profile_icon}
                  />
                </div>
              </div>
              <span>Profile</span>
            </>
          )}
        </NavLink>
      </div>

      {isModalOpen && <WindowModal onClose={handleModalClose} />}
    </section>
  );
}

export default Header;
