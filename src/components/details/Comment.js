import { Avatar, Box, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { sizeContext } from "../../context/WindowSizeProvider";

const GridItemsStyle = {
  background:
    "radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%)",
  width: "100%",
  padding: "1rem",
  color: "#fff",
  borderRadius: ".5rem",
  display: "flex",
  gap: "2rem",
};

const emailStyle = {
  backgroundImage:
    "linear-gradient(110.7deg, rgb(255, 81, 47) 1.7%, rgb(255, 167, 47) 8.2%, rgb(218, 253, 1) 16.2%, rgb(98, 234, 20) 23.4%, rgb(69, 193, 42) 32.8%, rgb(7, 249, 149) 43.7%, rgb(6, 200, 217) 55.3%, rgb(18, 51, 233) 65.5%, rgb(122, 59, 202) 74.5%, rgb(231, 7, 249) 82.3%, rgb(202, 59, 163) 91.4%)",
  backgroundSize: "90%",
  backgroundRepeat: "repeat",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const Comment = ({ commentsData }) => {
  const { size } = useContext(sizeContext);
  console.log("cm Data", commentsData);
  if (commentsData)
    return (
      <div>
        {commentsData.map((comment, idx) => (
          <Grid key={idx} container my={3}>
            <Grid item lg={12} style={GridItemsStyle}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                <Avatar
                  sx={{
                    width: size > 650 ? "70px" : "40px",
                    height: size > 650 ? "70px" : "40px",
                  }}
                />
                <Typography fontSize={14} fontWeight={700}>
                  {comment.name}
                </Typography>
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
              >
                <Typography
                  fontWeight={700}
                  component="p"
                  variant={size > 650 ? "h5" : "p"}
                  style={emailStyle}
                >
                  {comment.email}
                </Typography>
                <Typography sx={{ textAlign: "start" }}>
                  {comment.text}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        ))}
      </div>
    );
};

export default Comment;
