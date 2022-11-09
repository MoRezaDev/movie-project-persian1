import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { loginValidator } from "../../helper/functions";

import { sizeContext } from "../../context/WindowSizeProvider";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const inputStyle = {
  padding: ".7rem",
  borderRadius: ".5rem",
  border: "none",
  outline: "none",
  fontSize: "15px",
};

const boxStyle = {
  display: "flex",
  flexDirection: "column",
  gap: ".4rem",
  height: "120px",
};

const boxErrorStyle = {
  padding: ".5rem",
  backgroundColor: "#dd2c00",
  borderRadius: ".25rem",
  marginTop: ".25rem",
};

const Login = ({ open, setOpen }) => {
  const { size } = useContext(sizeContext);

  const [errorMsg, setErrorMsg] = useState("");
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleClose = () => {
    setOpen(false);
  };
  const [showError, setShowError] = useState({
    username: false,
    password: false,
  });

  const handlerChange = (event) => {
    if (event.target.id === "username") {
      setUserData({ ...userData, username: event.target.value });
      if (errorMsg?.username.length !== 0) {
        setShowError({ ...showError, username: true });
      } else {
        setShowError({ ...showError, username: false });
      }
    } else {
      setUserData({ ...userData, password: event.target.value });
      setShowError({ ...showError, password: true });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: size > 500 ? "400px" : "auto",
    bgcolor: "#1e1e1e",
    borderRadius: ".5rem",
    boxShadow: 24,
    p: 3,
    color: "#fff",
  };

  useEffect(() => {
    if (userData) setErrorMsg(loginValidator(userData));
  }, [userData]);
  return (
    <div>
      <AnimatePresence>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Typography
              sx={{ marginBottom: "2rem" }}
              variant="h4"
              component="h4"
            >
              فرم ورود
            </Typography>
            <form onSubmit={submitHandler} style={formStyle}>
              <Box style={boxStyle}>
                <Typography fontSize={12} variant="h6" component="p">
                  نام کاربری
                </Typography>
                <input
                  mplete="false"
                  onFocus={() => setShowError({ ...showError, username: true })}
                  onBlur={() => setShowError({ ...showError, username: false })}
                  value={userData.username}
                  onChange={handlerChange}
                  id="username"
                  style={inputStyle}
                  type="text"
                  placeholder="نام کاربری"
                />
                {errorMsg?.username?.length > 0 && showError.username && (
                  <motion.div
                    key="username"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={boxErrorStyle}
                  >
                    <Typography fontSize={10} variant="h6" component="p">
                      {errorMsg?.username}
                    </Typography>
                  </motion.div>
                )}
              </Box>
              <Box style={boxStyle}>
                <Typography fontSize={12} variant="h6" component="p">
                  رمز عبور
                </Typography>
                <input
                  onFocus={() => setShowError({ ...showError, password: true })}
                  onBlur={() => setShowError({ ...showError, password: false })}
                  value={userData.password}
                  onChange={handlerChange}
                  id="password"
                  style={inputStyle}
                  type="text"
                  placeholder="رمز عبور"
                />
                {errorMsg?.password?.length > 0 && showError.password && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={boxErrorStyle}
                  >
                    <Typography fontSize={10} variant="h6" component="p">
                      {errorMsg?.password}
                    </Typography>
                  </motion.div>
                )}
              </Box>
              {errorMsg && (
                <Button
                  disabled={
                    errorMsg.username.length === 0 &&
                    errorMsg.password.length === 0
                      ? false
                      : true
                  }
                  type="submit"
                  variant="contained"
                >
                  ورود
                </Button>
              )}
              <Box>
                <Typography fontSize={14} variant="h6" component="p" mb={2}>
                  حساب کاربری ندارید؟
                </Typography>
                <Typography fontSize={12} variant="h6" component="p">
                  اینجا را کلیک کنید
                </Typography>
              </Box>
            </form>
          </Box>
        </Modal>
      </AnimatePresence>
    </div>
  );
};

export default Login;
