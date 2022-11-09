import React from "react";
import { Container } from "@mui/material";
import { Box } from "@mui/system";
import TrendMovieCard from "./TrendMovieCard";

import { useQuery } from "@apollo/client/react";
import { GET_TREND_POSTS } from "../../graphql/query";
import LoadingSpinner from "../shared/LoadingSpinner";

const SlideVitrin = () => {
  const { loading, data, error } = useQuery(GET_TREND_POSTS);

  if (loading)
    return (
      <section
        style={{
          width: "100%",
          height: "400px",
          margin: "30px 0",
          background:
            "linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoadingSpinner />
      </section>
    );

  console.log(loading, data, error);
  return (
    <section
      style={{
        width: "100%",
        height: "400px",
        margin: "30px 0",
        background:
          "linear-gradient(109.6deg, rgb(36, 45, 57) 11.2%, rgb(16, 37, 60) 51.2%, rgb(0, 0, 0) 98.6%)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl" sx={{ overflow: "auto" }}>
        <Box
          display="flex"
          alignItems="center"
          sx={{ justifyContent: { xs: "start", md: "center" } }}
          gap={2}
        >
          {data.posts.map((post) => (
            <TrendMovieCard key={post.id} postData={post} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default SlideVitrin;
