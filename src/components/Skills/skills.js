import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/animatedLetters";
import TagCloud from "TagCloud";
import "./skills.scss";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const pageTitle = [
    "S",
    "k",
    "i",
    "l",
    "l",
    "s",
    "",
    "&",
    "",
    "E",
    "x",
    "p",
    "e",
    "r",
    "i",
    "e",
    "n",
    "c",
    "e",
  ];

  useEffect(() => {
    const container = ".tagcloud";
    const myTags = [
      "JS",
      "TS",
      "React",
      "Redux",
      "Node.js",
      "Express",
      "HTML",
      "CSS",
      "AWS",
      "Netifly",
      "MySQL",
      "PostgreSQL",
      "Heroku",
      "Firebase",
      "MongoDB",
      "Jest",
      "AWS EC2/RDS/S3",
      "Babel",
      "Agile",
      "Scrum",
      "Jira",
      "Confluence",
      "Figma",
      "Material-UI",
      "Reactstrap",
      "Font Awesome",
      "Bootstrap",
      "Git",
      "NPM",
      "Figma",
    ];

    const options = {
      radius: 180,
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 135,
      keep: true,
      useContainerInlineStyles: true,
      useItemInlineStyles: true,
      containerClass: "tagcloud",
      itemClass: "tagcloud--item",
    };

    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => {
      clearTimeout(timer);
      TagCloud(container, myTags, options);
    };
  }, []);

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArr={pageTitle}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p align="LEFT">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="clear"></div>
        <div className="skills-charts">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div className="myCanvasContianer">
            <div id="myCanvas" width={500} height={500}>
              <span className="tagcloud"></span>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Skills;
