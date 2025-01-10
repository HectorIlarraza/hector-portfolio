import { Link, NavLink } from "react-router-dom";
import "./sidebar.scss";
import LogoH from "../../assets/images/LogoHv4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { useColor } from "../../context/ColorContext";

//TODO: Alter width size of navbar and look into new design for it - Ver 2.0 feature

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const { colorFilter, changeColor } = useColor();

  return (
    <div className="nav-bar" id="nav_bar">
      <Link className="logo" rel="index" to="/">
        <img
          src={LogoH}
          alt="Logo"
          rel="index"
          style={{ filter: colorFilter }}
        />
      </Link>
      <nav className={showNav ? "mobile-show" : ""}>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          activeclassname="active"
          to="/"
          style={{ filter: colorFilter }}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          className="about-link"
          to="/about"
          style={{ filter: colorFilter }}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          className="skills-link"
          to="/skills"
          style={{ filter: colorFilter }}
        >
          <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          className="portfolio-link"
          to="/portfolio"
          style={{ filter: colorFilter }}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink
          onClick={() => setShowNav(false)}
          exact="true"
          className="contact-link"
          to="/contact"
          style={{ filter: colorFilter }}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#99ffff"
          size="3x"
          className="close-icon"
          style={{ filter: colorFilter }}
        />
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/hectorilarraza/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/HectorIlarraza"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#99ffff"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  );
};

export default Sidebar;
