import React, { useState, useEffect, createContext } from "react";

export const sizeContext = createContext();

const WindowSizeProvider = ({ children }) => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setSize(window.innerWidth);
      });
    };
  }, [size]);
  return (
    <sizeContext.Provider value={{ size }}>{children}</sizeContext.Provider>
  );
};

export default WindowSizeProvider;
