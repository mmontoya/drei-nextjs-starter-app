// ColorContext.js
import React, { createContext, useState } from "react";

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [cubeColor, setCubeColor] = useState("#33ccff");

  return (
    <ColorContext.Provider value={{ cubeColor, setCubeColor }}>
      {children}
    </ColorContext.Provider>
  );
};
