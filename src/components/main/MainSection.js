import { Container, Grid, Box } from "@mui/material";
import React from "react";

import { useQuery } from "@apollo/client";
import { GET_ALL_POSTS } from "../../graphql/query";
import SectionLeft from "./SectionLeft/SectionLeft";

import LoadingSpinner from "../shared/LoadingSpinner";
import PaginatedItems from "./PaginatedItems";

const MainSection = () => {
  const { loading, data } = useQuery(GET_ALL_POSTS);

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
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} sx={{ display: { md: "none" } }}>
          <PaginatedItems itemsPerPage={5} component="small" data={data} />
        </Grid>
        <Grid item xs={12} md={8} sx={{ display: { xs: "none", md: "block" } }}>
          <PaginatedItems itemsPerPage={5} component="default" data={data} />
        </Grid>
        <Grid item xs={12} md={4}>
          <SectionLeft />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainSection;
