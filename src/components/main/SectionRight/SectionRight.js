import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import MiniContentComponent from "./MiniContentComponent";

import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

//import TitleShorter.....
import { cardTitleShorter } from "../../../helper/functions";

const StyledBox = styled(Box)({
  width: "100%",
  color: "#fff",
  position: "relative",
  marginBottom: "3rem",
});

const StyledButton = styled(Button)({
  position: "absolute",
  bottom: "-10px",
  left: "30px",
  padding: "5px 20px",
  borderTopLeftRadius: "1.2rem",
});

const StyledTitleBox = styled(Box)({
  backgroundColor: "#2d2c2c",
  padding: "1rem 1.5rem",
  borderTopRightRadius: ".5rem",
  borderTopLeftRadius: "1.5rem",
});

const StyledContentBox = styled(Box)({
  backgroundColor: "#242424",
  padding: "1rem 1.5rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  borderBottomRightRadius: ".5rem",
  borderBottomLeftRadius: ".5rem",
});

const StyledContentInner = styled(Box)({
  display: "flex",
  gap: "1rem",
  width: "100%",
});

const StyledContentOuter = styled(Box)({
  width: "100%",
  height: "100%",
  overflow: "hidden",
  display: "flex",
  gap: "1rem",
  wordWrap: "break-word",
  marginBottom: "1rem",
});

const SectionRight = ({ postData }) => {
  const {
    type,
    slug,
    title,
    description,
    coverPhoto: { url },
  } = postData;

  return (
    <StyledBox>
      <StyledTitleBox>{title}</StyledTitleBox>
      <StyledContentBox>
        <StyledContentInner>
          <Box sx={{ minWidth: "230px", height: "320px" }}>
            <img width="100%" height="100%" alt="img" src={url} />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "start",
              height: "320px",
              marginTop: "6px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                minWidth: "40%",
              }}
            >
              <MiniContentComponent postData={postData} type="genre" />
              <MiniContentComponent postData={postData} type="yearProduct" />
              <MiniContentComponent postData={postData} type="time" />
              <MiniContentComponent postData={postData} type="quality" />
              <MiniContentComponent postData={postData} type="product" />
              <MiniContentComponent postData={postData} type="language" />
              <MiniContentComponent postData={postData} type="stars" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                width: "auto",
                height: "30%",
              }}
            >
              <MiniContentComponent postData={postData} type="director" />
              <MiniContentComponent postData={postData} type="imdb" />
            </Box>
          </Box>
        </StyledContentInner>
        <StyledContentOuter sx={{ wordBreak: "break-word" }}>
          <ArticleOutlinedIcon />
          <Typography
            variant="h6"
            fontSize={14}
            fontWeight={600}
            color="rgb(169,169,169)"
            minWidth={90}
          >
            خلاصه داستان :
          </Typography>
          <Typography
            component="p"
            variant="h6"
            textAlign="justify"
            fontSize={12}
          >
            {cardTitleShorter(description, 350)}
          </Typography>
        </StyledContentOuter>
      </StyledContentBox>
      <Link to={`${type}/${slug}`}>
        <StyledButton variant="contained">ادامه / دانلود</StyledButton>
      </Link>
    </StyledBox>
  );
};

export default SectionRight;
