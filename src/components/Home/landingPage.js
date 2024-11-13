import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/LogoHv4.png";
import AnimatedLetters from "../AnimatedLetters/animatedLetters";
import Logo from "./Logo/logo";
import { Loader } from "../Loader/loader.js";
import "./landingPage.scss";
import { useColor } from "../../context/ColorContext.js";

//TODO: create an animation for the p tag text
//TODO: add background animation, maybe comets or something in those regards. Also maybe add after image for Logo?

export const LandingPage = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const { colorFilter, changeColor } = useColor();
  const nameArr = ["e", "c", "t", "o", "r", ","];
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
      <div
        className="container home-page"
        style={{ opacity: "1", transform: "matrix(1,0,0,1,0,0)" }}
      >
        <div className="text-zone">
          <h1 style={{ filter: colorFilter }}>
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
          <h2>
            Full-Stack Developer / JavaScript & Web Solutions Architect /
            Freelancer
          </h2>
          <Link
            to="/contact"
            className="flat-button"
            style={{ filter: colorFilter }}
          >
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" style={{ filter: colorFilter }} />
    </>
  );
};
