import React, { useState } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

//import TitleShorter......
import { cardTitleShorter, genreTitleSeperator } from "../../helper/functions";

import imdbLogo from "../../images/imdb.png";
import DubbedCard from "./DubbedCard";
import SubtitleCard from "./SubtitleCard";

const StyledButton = styled(Button)({
  backgroundColor: "gray",
  "&:hover": {
    backgroundColor: "primary",
  },
});

const TrendMovieCard = ({ postData }) => {
  const {
    hasSubtitle,
    hasDubbed,
    imdbRating,
    type,
    slug,
    name,
    description,
    genre,
    coverPhoto: { url },
  } = postData;
  const [showDetail, setShowDetail] = useState(false);
  return (
    <section
      onMouseOver={() => setShowDetail(true)}
      onMouseLeave={() => setShowDetail(false)}
      style={{
        backgroundImage: `url('${url}')`,
        minWidth: "220px",
        minHeight: "320px",
        backgroundSize: "100%",
        borderRadius: ".5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <AnimatePresence>
        {showDetail && (
          <Link to={`${type}/${slug}`}>
            <motion.div
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key="detailCard"
              style={{
                width: "100%",
                height: "70%",
                padding: ".5rem",
                position: "absolute",
                zIndex: "500",
                color: "#fff",
                fontSize: "12px",
                backgroundColor: "rgba(0,0,0,0.8)",
              }}
            >
              <Typography
                fontWeight={100}
                fontSize={12}
                height="80%"
                overflow="hidden"
              >
                {cardTitleShorter(description, 320)}
              </Typography>
              <motion.div
                transition={{ duration: 0.2 }}
                initial={{ transform: "translateY(50%)" }}
                animate={{ transform: "translateY(-10%)" }}
                exit={{ transform: "translateY(50%)" }}
                style={{ height: "20%", display: "flex", alignItems: "end" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: ".5rem",
                  }}
                >
                  {genreTitleSeperator(genre).map((genre, idx) => (
                    <StyledButton
                      key={idx}
                      variant="contained"
                      sx={{
                        fontSize: "12px",
                        borderRadius: "1rem",
                        padding: "2px 5px",
                      }}
                    >
                      {cardTitleShorter(genre, 7)}
                    </StyledButton>
                  ))}
                </Box>
              </motion.div>
            </motion.div>
          </Link>
        )}
      </AnimatePresence>
      <Box
        sx={{
          width: "100%",
          height: "30%",
          backgroundColor: "rgba(0,0,0,0.9)",
          zIndex: "10",
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          position: "absolute",
          bottom: "0",
          color: "#fff",
          direction: "ltr",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(211,211,211,0.2)",
            borderBottom: "1px solid rgba(211,211,211,0.2)",
            padding: ".2rem .5rem",
          }}
        >
          <img src={imdbLogo} />
          <div>
            <span style={{ color: "#FCD12A", fontWeight: "600" }}>
              {imdbRating}
            </span>
            <span style={{ fontSize: "11px" }}> /10</span>
          </div>
        </Box>
        <Box ml={1} overflow="hidden" fontSize={14}>
          <span>{cardTitleShorter(name, 31)}</span>
        </Box>
      </Box>
      {hasDubbed ? <DubbedCard /> : hasSubtitle ? <SubtitleCard /> : null}
    </section>
  );
};

export default TrendMovieCard;
