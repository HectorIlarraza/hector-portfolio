import React, { createContext, useContext, useState } from "react";

const ColorContext = createContext({
  colorFilter: "",
  changeColor: () => {},
});

export const ColorProvider = ({ children }) => {
  const [colorFilter, setColorFilter] = useState("");

  const changeColor = () => {
    setColorFilter(`hue-rotate(${Math.random() * 360}deg)`);
  };

  const value = {
    colorFilter,
    changeColor,
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};
