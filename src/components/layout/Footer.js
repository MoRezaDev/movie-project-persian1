import React from "react";
import { useContext } from "react";
import { sizeContext } from "../../context/WindowSizeProvider";

const styles = {
  backgroundColor: "#2d2c2c",
  width: "100%",
  height: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "2rem",
  color: "#eee",
  direction: "ltr",
};

const styles2 = {
  backgroundColor: "#1e1e1e",
  padding: "1rem",
  cursor: "pointer",
  borderRadius: ".5rem",
  lineHeight: "15px",
};

const Footer = () => {
  const { size } = useContext(sizeContext);
  return (
    <div style={styles}>
      <div style={styles2}>
        &copy; 2022 Developed by:{" "}
        <span style={{ display: size < 378 && "block", marginTop: "5px" }}>
          Moreza.dev@gmail.com
        </span>
      </div>
    </div>
  );
};

export default Footer;
