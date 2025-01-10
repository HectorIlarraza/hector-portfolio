import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/animatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { useColor } from "../../context/ColorContext";
import "./About.scss";

//TODO: add movement for the Cube n increase its size a few, also zoom in effect - Ver 2.0 feature

export const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const { colorFilter, changeColor } = useColor();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1 style={{ filter: colorFilter }}>
            <AnimatedLetters
              letterClass={letterClass}
              strArr={["A", "b", "o", "u", "t", "", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Hi, I’m Hector Ilarraza, a full-stack software engineer with a
            passion for creating user-focused solutions that make a meaningful
            difference. My journey began in desktop support at companies like
            Credit Suisse and AllianceBernstein, where I developed a knack for
            solving complex technical problems. But my curiosity for building
            impactful applications led me to pursue a deeper understanding of
            software development.
          </p>
          <p align="LEFT">
            Today, I’m dedicated to crafting scalable, accessible applications
            that solve real-world problems. At Collabify.ai, I’ve honed my
            skills by leading initiatives to improve user experiences,
            streamline processes, and enhance performance. Beyond my
            professional work, I’m deeply fascinated by the intersection of
            AI/ML and music technology and how it can redefine how we create and
            experience art.
          </p>
          <p>
            Beyond coding, I’m deeply passionate about music and exploring how
            AI/ML can revolutionize creative industries. My personal projects
            often intersect these interests, reflecting my love for innovation
            and problem-solving.
          </p>
          <p>
            Let’s connect to discuss how we can create remarkable solutions
            together!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faNode} />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" style={{ filter: colorFilter }} />
    </>
  );
};
