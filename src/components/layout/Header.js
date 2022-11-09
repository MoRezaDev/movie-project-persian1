import React, { useContext, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Toolbar, Container, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../../images/images.png";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import SearchBar from "../SearchBar/SearchBar";

import { sizeContext } from "../../context/WindowSizeProvider";
import Login from "../Authenthication/Login";
import SignUp from "../Authenthication/SignUp";

const Header = () => {
  const { size } = useContext(sizeContext);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const expandBurgerMenu = () => {
    setShowBurgerMenu(true);
  };

  const collapseBurgerMenu = () => {
    setShowBurgerMenu(false);
  };

  const handleOpen = () => setOpen(true);
  const handleOpen2 = () => setOpen2(true);

  return (
    <AppBar color="transparent" position="static">
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            justifyContent: "space-between",
            padding: "0",
          }}
        >
          <div
            onClick={expandBurgerMenu}
            style={{ display: size > 870 && "none" }}
          >
            <MenuIcon sx={{ color: "white" }} />
          </div>
          <BurgerMenu
            show={showBurgerMenu}
            collapseBurgerMenu={collapseBurgerMenu}
          />
          {size < 870 && (
            <div style={{ position: "absolute", left: "0", top: "10px" }}>
              <SearchBar />
            </div>
          )}
          <div
            style={{
              width: "200px",
              display: size < 870 ? "none" : "flex",
              alignItems: "center",
              gap: "1rem",
              marginLeft: "2rem",
            }}
          >
            <img src={logo} alt="img1" style={{ width: "100%" }} />
          </div>
          <Box
            sx={{
              display: size < 870 ? "none" : "flex",
              gap: "1rem",
              marginLeft: size > 1160 ? "350px" : "150px",
              position: "relative",
              top: "5px",
            }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                sx={{ backgroundColor: "#1e1e1e", borderRadius: "1rem" }}
                variant="contained"
              >
                خانه
              </Button>
            </Link>
            <Button
              sx={{ backgroundColor: "#1e1e1e", borderRadius: "1rem" }}
              variant="contained"
            >
              خرید اشتراک
            </Button>
            <Button
              sx={{ backgroundColor: "#1e1e1e", borderRadius: "1rem" }}
              variant="contained"
            >
              تماس با ما
            </Button>
          </Box>
          <Box
            sx={{
              display: size < 870 ? "none" : "flex",
              gap: "1rem",
              position: "relative",
              top: "5px",
            }}
          >
            <Button onClick={handleOpen} variant="contained">
              ورود
            </Button>
            <Button onClick={handleOpen2} variant="contained">
              ثبت نام
            </Button>
          </Box>
        </Toolbar>
      </Container>
      {open && <Login open={open} setOpen={setOpen} />}
      {open2 && <SignUp open={open2} setOpen={setOpen2} />}
    </AppBar>
  );
};

export default Header;
