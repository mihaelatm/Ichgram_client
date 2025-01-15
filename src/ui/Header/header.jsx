import styles from "./header.module.css";
import ichgram_logo from "../../assets/images/ichgram_logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import links from "../../utils/links";
import logout_icon from "../../assets/icons/logout_icon.svg";
import LogoutModal from "../../components/LogoutModal/logoutModal";
import { useState } from "react";

function Header({ userProfileImage }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // pentru controlul modalei
  const navigate = useNavigate(); // pentru a naviga programatic la pagina dorită

  // Deschiderea modalei de logout
  const showModal = (e) => {
    e.preventDefault(); // Prevenim redirecționarea
    setIsModalOpen(true); // Deschidem modalul
  };

  // Funcția de închidere a modalei (dacă utilizatorul anulează)
  const handleCancel = () => {
    setIsModalOpen(false); // Închidem modalul
  };

  // Funcția de confirmare a logout-ului
  const handleOk = () => {
    setIsModalOpen(false); // Închidem modalul
    navigate("/"); // Redirecționăm utilizatorul către pagina de start
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
        {links.slice(0, -1).map(({ to, label, icon, filledIcon }) => (
          <div key={to}>
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
                  src={
                    userProfileImage ||
                    links.find((link) => link.to === "/profile").icon
                  }
                />
              </div>
              <span>Profile</span>
            </>
          )}
        </NavLink>

        <div onClick={showModal} className={styles.logout_wrapper}>
          <img src={logout_icon} alt="logout" className={styles.logout_img} />
          <p className={styles.logout_text}>Logout</p>
        </div>

        <LogoutModal
          open={isModalOpen}
          onConfirm={handleOk}
          onCancel={handleCancel}
        />
      </div>
    </section>
  );
}

export default Header;
