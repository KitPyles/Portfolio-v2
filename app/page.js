"use client";

import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "./theme";
import Typewriter from 'typewriter-effect'

// TODO: Plan & build page.

export default function Home() {
  return (
    <Container>
      <Typography variant="h1" textAlign={"center"}>
        Coming Soon!
      </Typography>
      <Typography
        variant="h2"
        textAlign={"center"}
        color={theme.palette.text.secondary}
      >
        Portfolio version 2
      </Typography>
      
    </Container>
  );
}
