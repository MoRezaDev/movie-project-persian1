import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";

import CloseIcon from "@mui/icons-material/Close";

import logo from "../../images/images.png";
import { Typography } from "@mui/material";

import Login from "../Authenthication/Login";
import SignUp from "../Authenthication/SignUp";

const BurgerMenu = ({ show, collapseBurgerMenu }) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleOpen = (e) => {
    e.stopPropagation();
    collapseBurgerMenu();
    setOpen(true);
  };
  const handleOpen2 = (e) => {
    e.stopPropagation();
    collapseBurgerMenu();
    setOpen2(true);
  };

  return (
    <div className={`burgerMenu_container ${show ? "show" : "hide"}`}>
      <div className="logo-container">
        <img src={logo} alt="logo" />
        <div
          onClick={(e) => {
            e.stopPropagation();
            collapseBurgerMenu();
          }}
          className="icon"
        >
          <CloseIcon sx={{ color: "white", cursor: "pointer" }} />
        </div>
      </div>
      <div className="divider"></div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Typography component="p" variant="h7" color="white">
          خانه
        </Typography>
      </Link>
      <div className="divider"></div>
      <Link to="/allmovies" style={{ textDecoration: "none" }}>
        <Typography component="p" variant="h7" color="white">
          فیلم ها
        </Typography>
      </Link>
      <div className="divider"></div>
      <Link to="/allseries" style={{ textDecoration: "none" }}>
        <Typography component="p" variant="h7" color="white">
          سریال ها
        </Typography>
      </Link>
      <div className="divider"></div>
      <Typography component="p" variant="h7" color="white">
        تماس با ما
      </Typography>
      <div className="divider"></div>
      <Box
        sx={{
          display: "flex",
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
      {open && <Login open={open} setOpen={setOpen} />}
      {open2 && <SignUp open={open2} setOpen={setOpen2} />}
    </div>
  );
};

export default BurgerMenu;
