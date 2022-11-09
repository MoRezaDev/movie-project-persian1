import React, { useContext } from "react";
import { Container, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { sizeContext } from "../../../context/WindowSizeProvider";

const MovieMenuStyle = {
  position: "absolute",
  top: "65px",
  right: "-10px",
  zIndex: "100",
};

const imageAddress =
  "https://prd-rteditorial.s3.us-west-2.amazonaws.com/wp-content/uploads/2022/03/24151214/EWKA_Doctor_Strange_Multiverse8.jpg";

const MoviesMenu = ({ collapseMenu }) => {
  const { size } = useContext(sizeContext);
  return (
    <motion.section
      style={MovieMenuStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key="MoviesAnimate"
    >
      <Container maxWidth="lg">
        <Box
          bgcolor="rgba(0,0,0,.8)"
          display="flex"
          p={3}
          borderRadius={2}
          sx={{
            cursor: "default",
            width: { xs: "100%", sm: "450px" },
            gap: { xs: "1rem", sm: "0" },
          }}
        >
          <Box flexGrow={2} display="flex" flexDirection="column" gap="1rem">
            <Link
              onClick={collapseMenu}
              style={{ textDecoration: "none", color: "#fff" }}
              to="/allmovies"
            >
              <Typography
                component="p"
                variant="p"
                sx={{ fontSize: { xs: "12px", md: "14px" } }}
              >
                تمامی فیلم ها
              </Typography>
            </Link>
            <Link
              onClick={collapseMenu}
              style={{ textDecoration: "none", color: "#fff" }}
              to="/trendmovies"
            >
              <Typography
                component="p"
                variant="p"
                sx={{ fontSize: { xs: "12px", md: "14px" } }}
              >
                فیلم های منتخب
              </Typography>
            </Link>
            <Link
              onClick={collapseMenu}
              style={{ textDecoration: "none", color: "#fff" }}
              to="/dubbedmovies"
            >
              <Typography
                component="p"
                variant="p"
                sx={{ fontSize: { xs: "12px", md: "14px" } }}
              >
                فیلم های دوبله
              </Typography>
            </Link>
          </Box>
          <Box flexGrow={1}>
            <img
              src={imageAddress}
              alt="img"
              width={size > 500 ? 170 : 110}
              style={{ borderRadius: ".5rem" }}
            />
          </Box>
        </Box>
      </Container>
    </motion.section>
  );
};

export default MoviesMenu;
