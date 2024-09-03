"use client";

import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "./theme";

// TODO: Plan & build page.
// TODO: About Me comp
// TODO: Skills comp
// TODO: Projects comp
// TODO: Education comp
// TODO: Goals comp
// TODO: Contact comp

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
