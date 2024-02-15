import { Box, Typography, styled } from "@mui/material";
import React from "react";

const Para = styled(Typography)`
  color: skyblue;
  margin-top: 200px;
  font-size:50px;
  font-weight: 700;
  text-transform: capitalize;
`;

const Home = () => {
  return (
    <Box>
      <Para>welcome to our websites</Para>
      <h1> Please add Members  </h1>
    </Box>
  );
};

export default Home;
