import styles from "./Navbar.module.css";
import logo from "../../assets/images/logo.svg";
import Button from "../button/Button";

/**
 * Navigation bar component
 * Implements semantic navigation and responsive layout
 */
const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>

        {/* Logo */}
        <a href="/" aria-label="Olive Home">
          <img src={logo} alt="Olive logo" className={styles.logo} />
        </a>

        {/* Navigation links */}
        <nav aria-label="Primary Navigation">
          <ul className={styles.navLinks}>
            <li><a href="#">Solutions</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Restaurants</a></li>
            <li><a href="#">Food</a></li>
          </ul>
        </nav>

        {/* Right actions */}
        <div className={styles.actions}>
          <button className={styles.signin}>Sign in</button>
          <Button>Get Olives →</Button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;