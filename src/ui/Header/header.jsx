import styles from "./header.module.css";
import ichgram_logo from "../../assets/images/ichgram_logo.svg";
import { Link, NavLink } from "react-router-dom";
import links from "../../utils/links";
import logout_icon from "../../assets/icons/logout_icon.svg";

function Header({ userProfileImage }) {
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
                  // Dacă utilizatorul are imagine, o afișăm, altfel afișăm iconița de profil
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
        <Link to="/" className={styles.logout_link}>
          <img src={logout_icon} alt="logout" className={styles.logout_img} />
          <p className={styles.logout_text}>Logout</p>
        </Link>
      </div>
    </section>
  );
}

export default Header;
