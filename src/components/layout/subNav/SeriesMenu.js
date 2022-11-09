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
  "https://cdn.vox-cdn.com/thumbor/7CN-G83mx7Y8d2iw1FDHmdCSCzc=/0x0:1382x2047/1200x0/filters:focal(0x0:1382x2047):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23215479/FKroQMHVcAsEAT0__1_.jpeg";

const SeriesMenu = ({ collapseMenu }) => {
  const { size } = useContext(sizeContext);
  return (
    <motion.section
      style={{ ...MovieMenuStyle, right: size < 650 ? "-10px" : "110px" }}
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
          width={450}
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
              to="/allseries"
            >
              <Typography
                component="p"
                variant="p"
                sx={{ fontSize: { xs: "12px", md: "14px" } }}
              >
                تمامی سریال ها
              </Typography>
            </Link>
            <Link
              onClick={collapseMenu}
              style={{ textDecoration: "none", color: "#fff" }}
              to="/trendseries"
            >
              <Typography
                component="p"
                variant="p"
                sx={{ fontSize: { xs: "12px", md: "14px" } }}
              >
                سریال های منتخب
              </Typography>
            </Link>
            <Link
              onClick={collapseMenu}
              style={{ textDecoration: "none", color: "#fff" }}
              to="/dubbedseries"
            >
              <Typography
                component="p"
                variant="p"
                sx={{ fontSize: { xs: "12px", md: "14px" } }}
              >
                سریال های دوبله
              </Typography>
            </Link>
          </Box>
          <Box flexGrow={1}>
            <img
              src={imageAddress}
              alt="img"
              width={size > 500 ? 170 : 110}
              height="150px"
              style={{ borderRadius: ".5rem", objectFit: "fill" }}
            />
          </Box>
        </Box>
      </Container>
    </motion.section>
  );
};

export default SeriesMenu;
