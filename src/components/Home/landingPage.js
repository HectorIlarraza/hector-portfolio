import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/LogoHv4.png";
import AnimatedLetters from "../AnimatedLetters/animatedLetters";
import Logo from "./Logo/logo";
import "./landingPage.scss";
import Loader from "react-loaders";

const LandingPage = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArr = ["e", "c", "t", "o", "r"];
  const jobArr = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArr={nameArr}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArr={jobArr}
              idx={20}
            />
          </h1>
          <h2>Full-Stack Developer / Javascript Practitioner</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default LandingPage;
