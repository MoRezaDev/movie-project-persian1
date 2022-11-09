import { Box, styled, Typography } from "@mui/material";
import React, { useContext } from "react";

//importing icons....
import MovieFilterOutlinedIcon from "@mui/icons-material/MovieFilterOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import HighQualityOutlinedIcon from "@mui/icons-material/HighQualityOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";

import imdbLogo from "../../../images/imdb.png";

//call size context.....
import { sizeContext } from "../../../context/WindowSizeProvider";

const StyledMiniContentBox = styled(Box)({
  display: "flex",
  gap: ".5rem",
  alignItems: "center",
  height: "100%",
});

const MiniContentComponent = ({ type, postData }) => {
  const { size } = useContext(sizeContext);

  //create Switch Case Component.........
  const renderSwitch = (type) => {
    switch (type) {
      case "genre":
        return (
          <div
            style={{
              display: "flex",
              gap: ".5rem",
              alignItems: "center",
              height: "100%",
            }}
          >
            <MovieFilterOutlinedIcon />
            <Typography fontSize={12} color="silver">
              ژانر :
            </Typography>
            <Typography fontSize={12}>{postData.genre}</Typography>
          </div>
        );
      case "yearProduct":
        return (
          <div
            style={{
              display: "flex",
              gap: ".5rem",
              alignItems: "center",
              height: "100%",
            }}
          >
            <CalendarMonthOutlinedIcon />
            <Typography fontSize={12} color="silver">
              تاریخ انتشار :
            </Typography>
            <Typography fontSize={12}>{postData.productDate}</Typography>
          </div>
        );
      case "time":
        return (
          <div
            style={{
              display: "flex",
              gap: ".5rem",
              alignItems: "center",
              height: "100%",
            }}
          >
            <AccessTimeOutlinedIcon />
            <Typography fontSize={12} color="silver">
              زمان :
            </Typography>
            <Typography fontSize={12}>{postData.timeDuration}</Typography>
          </div>
        );
      case "quality":
        return (
          <div
            style={{
              display: "flex",
              gap: ".5rem",
              alignItems: "center",
              height: "100%",
            }}
          >
            <HighQualityOutlinedIcon />
            <Typography fontSize={12} color="silver">
              کیفیت :
            </Typography>
            <Typography fontSize={12}>{postData.quality}</Typography>
          </div>
        );
      case "product":
        return (
          <div
            style={{
              display: "flex",
              gap: ".5rem",
              alignItems: "center",
              height: "100%",
            }}
          >
            <PublicOutlinedIcon />
            <Typography fontSize={12} color="silver">
              محصول :
            </Typography>
            <Typography fontSize={12}>{postData.productCountry}</Typography>
          </div>
        );
      case "language":
        return (
          <div
            style={{
              display: "flex",
              gap: ".5rem",
              alignItems: "center",
              height: "100%",
            }}
          >
            <LanguageOutlinedIcon />
            <Typography fontSize={12} color="silver">
              زبان :
            </Typography>
            <Typography fontSize={12}>{postData.language}</Typography>
          </div>
        );
      case "director":
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: ".5rem",
              alignItems: "start",
              width: size > 1100 ? "100px" : "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: ".5rem",
                alignItems: "center",
              }}
            >
              <PersonPinOutlinedIcon />
              <Typography fontSize={12} color="silver">
                کارگردان :
              </Typography>
            </div>
            <Typography fontSize={12}>{postData.director}</Typography>
          </div>
        );
      case "stars":
        return (
          <div
            style={{
              display: "flex",
              gap: ".5rem",
              height: "100%",
              alignItems: "start",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: ".5rem",
                alignItems: "center",
                minWidth: "80px",
              }}
            >
              <Diversity3OutlinedIcon />
              <Typography
                fontSize={12}
                color="silver"
                sx={{ position: "relative", top: "2px" }}
              >
                ستارگان :
              </Typography>
            </div>
            <Typography fontSize={12}>{postData.stars}</Typography>
          </div>
        );
      case "imdb":
        return (
          <div
            style={{
              display: "flex",
              gap: ".5rem",
              alignItems: "center",
              height: "100%",
            }}
          >
            <img
              width={30}
              src={imdbLogo}
              alt="imdb"
              style={{ position: "relative", left: "3px" }}
            />
            <Typography fontSize={12} color="silver">
              رتبه :
            </Typography>
            <Typography fontSize={12}>{postData.imdbRating}</Typography>
          </div>
        );

      default:
        return type;
    }
  };
  // End of Switch Case Component....................

  if (postData)
    return <StyledMiniContentBox>{renderSwitch(type)}</StyledMiniContentBox>;
};

export default MiniContentComponent;
