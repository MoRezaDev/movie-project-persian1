import React, { useContext } from "react";
import { styled, Box, Button, Typography, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

import SmallMiniContent from "../main/SectionRight/SmallMiniContent";

import { cardTitleShorter } from "../../helper/functions";

import { sizeContext } from "../../context/WindowSizeProvider";

import AccordionSection from "./AccordionSection";
import Comment from "./Comment";

const StyledBox = styled(Box)({
  width: "97%",
  color: "#fff",
  position: "relative",
  marginBottom: "3rem",
  margin: "auto",
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

const StyledCommentInput = styled(TextField)({
  "& label.Mui-focused": {
    color: "#fff",
  },
  "label.Mui": {
    color: "#fff",
  },
});

const useStyles = makeStyles({
  input: {
    color: "white",
  },
  style: {
    color: "#fff",
  },
});

const SmallContentDetails = ({ postData }) => {
  const { size } = useContext(sizeContext);
  const classes = useStyles();
  const {
    coverPhoto: { url },
    title,
  } = postData;
  return (
    <>
      <StyledBox sx={{ display: size > 780 && "none" }}>
        <StyledTitleBox>{title}</StyledTitleBox>
        <StyledContentBox>
          <StyledContentInner
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
          >
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
      </StyledBox>
      <StyledBox
        sx={{
          display: size > 780 && "none",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        <StyledTitleBox>دانلود</StyledTitleBox>
        <StyledContentBox>
          <AccordionSection />
        </StyledContentBox>
      </StyledBox>
      <StyledBox sx={{ display: size > 780 && "none" }}>
        <StyledTitleBox>نظرات</StyledTitleBox>
        <StyledContentBox>
          <Box
            sx={{
              padding: ".25rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <StyledCommentInput
              InputLabelProps={{ className: classes.input }}
              inputProps={{
                className: classes.input,
              }}
              sx={{ width: "100%" }}
              label="ثبت نظر"
              multiline
              rows={4}
            />
            <Button sx={{ width: "200px" }} variant="contained">
              ثبت نظر
            </Button>
          </Box>
          <Box mt={3}>
            <Comment commentsData={postData.comments} />
          </Box>
        </StyledContentBox>
      </StyledBox>
    </>
  );
};

export default SmallContentDetails;
