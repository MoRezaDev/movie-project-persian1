import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { signUpValidator } from "../../helper/functions";
import { sizeContext } from "../../context/WindowSizeProvider";
import { useContext } from "react";

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
  height: "100px",
};

const boxErrorStyle = {
  padding: ".5rem",
  backgroundColor: "#dd2c00",
  borderRadius: ".25rem",
  marginTop: ".25rem",
};

const SignUp = ({ open, setOpen }) => {
  const { size } = useContext(sizeContext);
  const [errorMsg, setErrorMsg] = useState("");
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
  });

  const handleClose = () => {
    setOpen(false);
  };
  const [showError, setShowError] = useState({
    username: false,
    password: false,
    email: false,
    confirmPassword: false,
  });

  const handlerChange = (event) => {
    switch (event.target.id) {
      case "username": {
        setUserData({ ...userData, username: event.target.value });
        if (errorMsg?.username.length !== 0) {
          setShowError({ ...showError, username: true });
        } else {
          setShowError({ ...showError, username: false });
        }
        break;
      }
      case "email": {
        setUserData({ ...userData, email: event.target.value });
        if (errorMsg?.email.length !== 0) {
          setShowError({ ...showError, email: true });
        } else {
          setShowError({ ...showError, email: false });
        }
        break;
      }
      case "password": {
        setUserData({ ...userData, password: event.target.value });
        if (errorMsg?.password.length !== 0) {
          setShowError({ ...showError, password: true });
        } else {
          setShowError({ ...showError, password: false });
        }
        break;
      }
      case "confirmPassword": {
        setUserData({ ...userData, confirmPassword: event.target.value });
        if (errorMsg?.confirmPassword.length !== 0) {
          setShowError({ ...showError, confirmPassword: true });
        } else {
          setShowError({ ...showError, confirmPassword: false });
        }
        break;
      }
      default: {
        return null;
      }
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    backgroundColor: "#1e1e1e",
    borderRadius: ".5rem",
    boxShadow: "24px",
    padding: "24px",
    color: "#fff",
    overflow: "auto",
    height: size < 510 && "100%",
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (userData) setErrorMsg(signUpValidator(userData));
  }, [userData]);
  return (
    <div>
      <AnimatePresence>
        <Modal open={open} onClose={handleClose}>
          <Box style={style}>
            <Typography
              sx={{ marginBottom: "2rem" }}
              variant="h4"
              component="h4"
            >
              فرم ثبت نام
            </Typography>
            <form onSubmit={submitHandler} style={formStyle}>
              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                  flexDirection: size < 510 && "column",
                }}
              >
                <Box style={boxStyle}>
                  <Typography fontSize={12} variant="h6" component="p">
                    نام کاربری
                  </Typography>
                  <input
                    onFocus={() =>
                      setShowError({ ...showError, username: true })
                    }
                    onBlur={() =>
                      setShowError({ ...showError, username: false })
                    }
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
                    ایمیل
                  </Typography>
                  <input
                    onFocus={() => setShowError({ ...showError, email: true })}
                    onBlur={() => setShowError({ ...showError, email: false })}
                    value={userData.email}
                    onChange={handlerChange}
                    id="email"
                    style={inputStyle}
                    type="text"
                    placeholder="ایمیل را وارد کنید"
                  />
                  {errorMsg?.email?.length > 0 && showError.email && (
                    <motion.div
                      key="email"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={boxErrorStyle}
                    >
                      <Typography fontSize={10} variant="h6" component="p">
                        {errorMsg?.email}
                      </Typography>
                    </motion.div>
                  )}
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "1rem",
                  flexDirection: size < 510 && "column",
                }}
              >
                <Box style={boxStyle}>
                  <Typography fontSize={12} variant="h6" component="p">
                    رمز عبور
                  </Typography>
                  <input
                    onFocus={() =>
                      setShowError({ ...showError, password: true })
                    }
                    onBlur={() =>
                      setShowError({ ...showError, password: false })
                    }
                    value={userData.password}
                    onChange={handlerChange}
                    id="password"
                    style={inputStyle}
                    type="password"
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
                <Box style={boxStyle}>
                  <Typography fontSize={12} variant="h6" component="p">
                    تایید رمز عبور
                  </Typography>
                  <input
                    onFocus={() =>
                      setShowError({ ...showError, confirmPassword: true })
                    }
                    onBlur={() =>
                      setShowError({ ...showError, confirmPassword: false })
                    }
                    value={userData.confirmPassword}
                    onChange={handlerChange}
                    id="confirmPassword"
                    style={inputStyle}
                    type="password"
                    placeholder="تایید رمز عبور"
                  />
                  {errorMsg?.confirmPassword?.length > 0 &&
                    showError.confirmPassword && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={boxErrorStyle}
                      >
                        <Typography fontSize={10} variant="h6" component="p">
                          {errorMsg?.confirmPassword}
                        </Typography>
                      </motion.div>
                    )}
                </Box>
              </Box>
              {errorMsg && (
                <Button
                  disabled={
                    errorMsg.username.length === 0 &&
                    errorMsg.password.length === 0 &&
                    errorMsg.confirmPassword.length === 0 &&
                    errorMsg.email.length === 0
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

export default SignUp;
