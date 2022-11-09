import React from "react";

const DubbedCard = () => {
  return (
    <div
      style={{
        backgroundColor: "#00cc00",
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        padding: "2px 40px",
        color: "#fff",
        position: "absolute",
        top: "20px",
        transform: "rotate(45deg)",
        right: "-35px",
      }}
    >
      <span
        style={{
          position: "relative",
          bottom: "3px",
          right: "5px",
          fontSize: "13px",
        }}
      >
        دوبله
      </span>
    </div>
  );
};

export default DubbedCard;
