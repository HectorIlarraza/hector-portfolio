import { useEffect, useRef, useState } from "react";
import GifFile from "../../assets/images/tenor.gif";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/animatedLetters";
import emailjs from "@emailjs/browser";
import { useColor } from "../../context/ColorContext";
import "./contact.scss";

//TODO: Replace maps componet with something else, maybe an animation

export const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();
  const { colorFilter, colorChange } = useColor();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "contact_form", refForm.current, "8x664qmmdre_m1jOF")
      .then(
        () => {
          alert("Message successfully sent!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1 style={{ filter: colorFilter }}>
            <AnimatedLetters
              letterClass={letterClass}
              strArr={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Let’s connect! Whether you’re looking to collaborate on a project,
            discuss exciting opportunities, or just share ideas, I’d love to
            hear from you.
          </p>
          <p>&nbsp;</p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="gif-wrap">
          <div className="gif-container">
            <img
              src={GifFile}
              alt="Location Animation"
              className="location-gif"
            />
          </div>
        </div>
      </div>
      <Loader type="pacman" style={{ filter: colorFilter }} />
    </>
  );
};
