import React from "react";

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
  lineHeight: "2px",
};

const Footer = () => {
  return (
    <div style={styles}>
      <div style={styles2}>&copy; 2022 Developed by: Moreza.dev@gmail.com</div>
    </div>
  );
};

export default Footer;
