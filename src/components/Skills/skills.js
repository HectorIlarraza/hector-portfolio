import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/animatedLetters";
import TagCloud from "TagCloud";
import { useColor } from "../../context/ColorContext";
import "./skills.scss";

export const Skills = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [radius, setRadius] = useState(300);
  const { colorFilter, changeColor } = useColor();
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
      "AWS \n EC2/RDS/S3",
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

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setRadius(screenWidth <= 960 ? 150 : 300);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    const options = {
      radius: radius,
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

    let tagCloud = TagCloud(container, myTags, options);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);

      if (tagCloud) {
        tagCloud.destroy();
      }
    };
  }, [radius]);

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1 style={{ filter: colorFilter }}>
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
      <Loader type="pacman" style={{ filter: colorFilter }} />
    </>
  );
};
