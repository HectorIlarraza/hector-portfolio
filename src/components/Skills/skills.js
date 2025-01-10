import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/animatedLetters";
import TagCloud from "TagCloud";
import { useColor } from "../../context/ColorContext";
import "./skills.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faClock,
  faRocket,
  faUsers,
  faCode,
  faServer,
} from "@fortawesome/free-solid-svg-icons";

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
  const [isLoading, setIsLoading] = useState(true);

  const technicalSkills = [
    {
      name: "React/Redux",
      level: 90,
      highlight:
        "Optimized Redux state management at Collabify.ai, boosting site performance by 30%",
      icon: faCode,
    },
    {
      name: "TypeScript/JavaScript",
      level: 85,
      highlight:
        "Implemented responsive, accessible web pages improving user satisfaction by 15%",
      icon: faRocket,
    },
    {
      name: "Node.js/Express",
      level: 80,
      highlight:
        "Built scalable backend services supporting 1000+ concurrent users",
      icon: faServer,
    },
    {
      name: "HTML/CSS",
      level: 90,
      highlight:
        "Designed reusable email templates, cutting development time by 25%",
      icon: faClock,
    },
    {
      name: "PostgreSQL/MongoDB",
      level: 75,
      highlight: "Optimized database queries reducing response time by 40%",
      icon: faChartLine,
    },
    {
      name: "AWS/Cloud Services",
      level: 70,
      highlight:
        "Deployed and maintained cloud infrastructure for enterprise applications",
      icon: faUsers,
    },
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

    setTimeout(() => {
      setIsLoading(false);
    }, 500);

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
          <div className="skills-bars">
            {technicalSkills.map((skill, index) => (
              <div className="skill-bar" key={index}>
                <div className="skill-info">
                  <span className="skill-name">
                    <FontAwesomeIcon
                      icon={skill.icon}
                      className="skill-icon"
                      style={{ filter: colorFilter }}
                    />
                    {skill.name}
                  </span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-progress">
                  <div
                    className={`skill-progress-bar ${
                      !isLoading ? "loaded" : ""
                    }`}
                    style={{
                      width: isLoading ? "0%" : `${skill.level}%`,
                      filter: colorFilter,
                    }}
                  ></div>
                </div>
                <div className="skill-highlight">
                  <p>{skill.highlight}</p>
                </div>
              </div>
            ))}
          </div>
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
