import React from "react";
import { Container, Grid } from "@mui/material";
import PaginatedItems from "../main/PaginatedItems";

const CardContent = ({ data }) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} sx={{ display: { md: "none" } }}>
          <PaginatedItems itemsPerPage={5} component="small" data={data} />
        </Grid>
        <Grid item xs={12} md={8} sx={{ display: { xs: "none", md: "block" } }}>
          <PaginatedItems itemsPerPage={5} component="default" data={data} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CardContent;
