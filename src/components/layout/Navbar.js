import React, { useContext, useState } from "react";
import { Container, Box, Toolbar, Typography } from "@mui/material";
import { AnimatePresence } from "framer-motion";

//icons
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MoviesMenu from "./subNav/MoviesMenu";
import SeriesMenu from "./subNav/SeriesMenu";
import SearchBar from "../SearchBar/SearchBar";

import { sizeContext } from "../../context/WindowSizeProvider";

const Navbar = () => {
  const [showMovieMenu, setShowMovieMenu] = useState(false);
  const [showSeriesMenu, setShowSeriesMenu] = useState(false);

  const { size } = useContext(sizeContext);

  const collapseMovieMenu = () => {
    setShowMovieMenu(false);
  };
  const collapseSeriesMenu = () => {
    setShowSeriesMenu(false);
  };
  return (
    <nav style={{ marginTop: "80px", marginBottom: "30px" }}>
      <Container maxWidth="lg">
        <Box bgcolor="#1e1e1e" mt={3} color="white" borderRadius={1}>
          <Toolbar
            sx={{
              display: "flex",
              gap: size > 330 ? "3rem" : "2.8rem",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "0",
                top: "20%",
                color: "gray",
              }}
            >
              {size > 870 && <SearchBar />}
            </div>
            <div
              onMouseOver={() => setShowMovieMenu(true)}
              onMouseLeave={() => setShowMovieMenu(false)}
              style={{
                height: "64px",
                display: "flex",
                flexDirection: size > 450 ? "row" : "column",
                justifyContent: size < 450 && "center",
                alignItems: "center",
                gap: ".5rem",
                cursor: "pointer",
              }}
            >
              <LocalMoviesIcon />
              <Typography component="h5" variant="p">
                فیلم ها
              </Typography>
              <AnimatePresence>
                {showMovieMenu && (
                  <MoviesMenu collapseMenu={collapseMovieMenu} />
                )}
              </AnimatePresence>
            </div>
            <div
              onMouseOver={() => setShowSeriesMenu(true)}
              onMouseLeave={() => setShowSeriesMenu(false)}
              style={{
                height: "64px",
                display: "flex",
                flexDirection: size > 450 ? "row" : "column",
                justifyContent: size < 450 && "center",
                alignItems: "center",
                gap: ".5rem",
                cursor: "pointer",
              }}
            >
              <MovieFilterIcon />
              <Typography component="h5" variant="p">
                سریال ها
              </Typography>
              {showSeriesMenu && (
                <SeriesMenu collapseMenu={collapseSeriesMenu} />
              )}
            </div>
            <div
              style={{
                height: "64px",
                display: "flex",
                flexDirection: size > 450 ? "row" : "column",
                justifyContent: size < 450 && "center",
                alignItems: "center",
                gap: ".5rem",
                cursor: "pointer",
              }}
            >
              <LiveTvIcon />
              <Typography component="h5" variant="p">
                تماشای آنلاین
              </Typography>
            </div>
          </Toolbar>
        </Box>
      </Container>
    </nav>
  );
};

export default Navbar;
