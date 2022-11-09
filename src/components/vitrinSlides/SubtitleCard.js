import React from "react";

const SubtitleCard = () => {
  return (
    <div
      style={{
        backgroundColor: "gray",
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
      <span style={{ position: "relative", bottom: "4px", fontSize: "13px" }}>
        زیرنویس
      </span>
    </div>
  );
};

export default SubtitleCard;
