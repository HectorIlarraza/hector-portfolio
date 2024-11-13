import { useEffect, useRef } from "react";
import LogoH from "../../../assets/images/LogoHv4.png";
import { useColor } from "../../../context/ColorContext";
import "./logo.scss";

const Logo = () => {
  const logoRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const { colorFilter, changeColor } = useColor();
  const changeColorRef = useRef(changeColor);

  useEffect(() => {
    const logo = logoRef.current;
    const container = containerRef.current;
    let x = 1;
    let y = 1;
    let xSpeed = 2;
    let ySpeed = 2;
    let isChangingColor = false;
    const rotationDegree = 15;

    const animate = () => {
      const rect = logo.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const padding = Math.abs(
        rect.width * Math.sin((rotationDegree * Math.PI) / 180)
      );
      const rightBound = containerRect.width - rect.width;
      const bottomBound = containerRect.height - rect.height;
      const buffer = 1;

      if (
        (x >= rightBound - buffer || x <= buffer + padding) &&
        !isChangingColor
      ) {
        xSpeed = -xSpeed;
        isChangingColor = true;
        changeColorRef.current();
        setTimeout(() => {
          isChangingColor = false;
        }, 100);
      }
      if (
        (y >= bottomBound - buffer || y <= buffer + padding) &&
        !isChangingColor
      ) {
        ySpeed = -ySpeed;
        isChangingColor = true;
        changeColorRef.current();
        setTimeout(() => {
          isChangingColor = false;
        }, 100);
      }

      x = Math.max(padding, Math.min(x + xSpeed, rightBound));
      y = Math.max(padding, Math.min(y + ySpeed, bottomBound));

      logo.style.transform = `translate(${x}px, ${y}px) rotate(${rotationDegree}deg)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="logo-container" ref={containerRef}>
      <img
        className="solid-logo"
        ref={logoRef}
        src={LogoH}
        alt="JavaScript,  Developer"
        style={{ filter: colorFilter }}
      />
    </div>
  );
};

export default Logo;
