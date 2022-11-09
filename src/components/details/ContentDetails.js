import React, { useContext } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import { makeStyles } from "@mui/styles";
import { cardTitleShorter } from "../../helper/functions";
import { sizeContext } from "../../context/WindowSizeProvider";

import { GET_POST_DETAIL } from "../../graphql/query";
import MiniContentComponent from "../main/SectionRight/MiniContentComponent";
import LoadingSpinner from "../shared/LoadingSpinner";
import SmallContentDetails from "./SmallContentDetails";
import AccordionSection from "./AccordionSection";
import Comment from "./Comment";

const StyledBox = styled(Box)({
  width: "100%",
  color: "#fff",
  position: "relative",
  marginBottom: "3rem",
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

const ContentDetails = () => {
  const { slug } = useParams();
  const { loading, data } = useQuery(GET_POST_DETAIL, {
    variables: {
      slug,
    },
  });

  const { size } = useContext(sizeContext);
  const classes = useStyles();

  if (loading)
    return (
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LoadingSpinner />
        </Box>
      </Container>
    );

  if (data)
    return (
      <>
        <SmallContentDetails postData={data.posts[0]} />
        <Container maxWidth="lg" sx={{ display: size < 780 && "none" }}>
          <StyledBox>
            <StyledTitleBox>{data.posts[0].title}</StyledTitleBox>
            <StyledContentBox>
              <StyledContentInner>
                <Box sx={{ minWidth: "230px", height: "320px" }}>
                  <img
                    width="100%"
                    height="100%"
                    alt="img"
                    src={data.posts[0].coverPhoto.url}
                  />
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
                    <MiniContentComponent
                      postData={data.posts[0]}
                      type="genre"
                    />
                    <MiniContentComponent
                      postData={data.posts[0]}
                      type="yearProduct"
                    />
                    <MiniContentComponent
                      postData={data.posts[0]}
                      type="time"
                    />
                    <MiniContentComponent
                      postData={data.posts[0]}
                      type="quality"
                    />
                    <MiniContentComponent
                      postData={data.posts[0]}
                      type="product"
                    />
                    <MiniContentComponent
                      postData={data.posts[0]}
                      type="language"
                    />
                    <MiniContentComponent
                      postData={data.posts[0]}
                      type="stars"
                    />
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
                    <MiniContentComponent
                      postData={data.posts[0]}
                      type="director"
                    />
                    <MiniContentComponent
                      postData={data.posts[0]}
                      type="imdb"
                    />
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
                  {cardTitleShorter(data.posts[0].description, 350)}
                </Typography>
              </StyledContentOuter>
            </StyledContentBox>
          </StyledBox>
          <StyledBox>
            <StyledTitleBox>دانلود</StyledTitleBox>
            <StyledContentBox>
              <AccordionSection />
            </StyledContentBox>
          </StyledBox>
          <StyledBox>
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
                <Comment commentsData={data.posts[0].comments} />
              </Box>
            </StyledContentBox>
          </StyledBox>
        </Container>
      </>
    );
};

export default ContentDetails;
