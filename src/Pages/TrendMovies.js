import { Container, Box } from "@mui/material";
import React from "react";

import { useQuery } from "@apollo/client";
import { GET_TREND_MOVIES } from "../graphql/query";

import LoadingSpinner from "../components/shared/LoadingSpinner";
import CardContent from "../components/shared/CardContent";

const TrendMovies = () => {
    const { loading, data, error } = useQuery(GET_TREND_MOVIES);

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
    return <CardContent data={data} />;
}

export default TrendMovies