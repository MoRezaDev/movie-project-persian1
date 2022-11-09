import React, { useContext } from "react";
import { styled, Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

import SmallMiniContent from "./SmallMiniContent";

import { cardTitleShorter } from "../../../helper/functions";

import { sizeContext } from "../../../context/WindowSizeProvider";

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
  display: "block",
  gap: "1rem",
  wordWrap: "break-word",
  marginBottom: "2rem",
});

const SmallSectionRight = ({ postData }) => {
  const { size } = useContext(sizeContext);
  const {
    type,
    slug,
    coverPhoto: { url },
    title,
  } = postData;
  return (
    <StyledBox>
      <StyledTitleBox>{title}</StyledTitleBox>
      <StyledContentBox>
        <StyledContentInner sx={{ flexDirection: { xs: "column", sm: "row" } }}>
          <Box
            sx={{
              minWidth: "230px",
              height: "320px",
              width: size < 600 && "250px",
            }}
          >
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
              }}
            >
              <SmallMiniContent postData={postData} />
            </Box>
          </Box>
        </StyledContentInner>
        <StyledContentOuter>
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
            {cardTitleShorter(postData.description, 350)}
          </Typography>
        </StyledContentOuter>
      </StyledContentBox>
      <Link to={`${type}/${slug}`}>
        <StyledButton variant="contained">ادامه / دانلود</StyledButton>
      </Link>
    </StyledBox>
  );
};

export default SmallSectionRight;
