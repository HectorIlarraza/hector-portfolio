import { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
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
        <div className="info-map">
          Hector Ilarraza,
          <br />
          New York City,
          <br />
          Queens
          <br />
          <span>freelancersilarraza@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[40.792, -73.809]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[40.792, -73.809]}>
              <Popup>Hector lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" style={{ filter: colorFilter }} />
    </>
  );
};
