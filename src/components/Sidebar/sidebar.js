import { Link, NavLink } from "react-router-dom";
import "./sidebar.scss";
import LogoH from "../../assets/images/logoH.png";
import LogoSubtitle from "../../assets/images/logoipsum-261.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faSuitcase, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoH} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hectorilarraza/" >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hectorilarraza/" >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
