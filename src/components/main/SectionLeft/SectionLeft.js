import React, { useRef } from "react";
import { styled, Box, Typography, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import "./SectionLeft.css";
// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { useQuery } from "@apollo/client";
import { GET_DUBBED_POSTS } from "../../../graphql/query";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

//call context.....
import { sizeContext } from "../../../context/WindowSizeProvider";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useContext } from "react";

const StyledSectionLeft = styled(Box)({
  width: "100%",
  height: "522px",
  backgroundColor: "#2d2c2c",
  borderRadius: ".3rem",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  zIndex: 2,
});

const StyledTitle = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#fff",
});

const StyledSlider = styled(Box)({
  padding: "1rem",
  width: "100%",
  height: "100%",
  zIndex: 10,
});

const SectionLeft = () => {
  const { data } = useQuery(GET_DUBBED_POSTS);
  const { size } = useContext(sizeContext);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  if (data)
    return (
      <StyledSectionLeft>
        <StyledTitle>
          <Typography fontSize={16} component="h6" variant="h6">
            فیلم های دوبله
          </Typography>
          <Link to="/dubbedmovies" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                fontSize: "12px",
                backgroundColor: "#050505",
                borderRadius: "1rem",
              }}
              variant="contained"
            >
              ورود به آرشیو
            </Button>
          </Link>
        </StyledTitle>
        <Divider />
        <StyledSlider>
          <Swiper
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            dir="ltr"
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            centeredSlides={true}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            {data.posts.map((dubbedPost) => (
              <SwiperSlide key={dubbedPost.id}>
                <div
                  style={{
                    width: size > 410 ? "240px" : "95%",
                    height: size > 410 ? "340px" : "320px",
                    margin: ".5rem auto",
                  }}
                >
                  <img
                    alt="left"
                    src={dubbedPost.coverPhoto.url}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: ".5rem",
                    }}
                  />
                </div>
                <h4
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    marginTop: "3px",
                  }}
                >
                  {dubbedPost.name}
                </h4>
              </SwiperSlide>
            ))}
            <div className="button prev" ref={prevRef}>
              <ArrowBackIosNewIcon />
            </div>
            <div className="button next" ref={nextRef}>
              <ArrowForwardIosIcon />
            </div>
          </Swiper>
        </StyledSlider>
      </StyledSectionLeft>
    );
};

export default SectionLeft;
