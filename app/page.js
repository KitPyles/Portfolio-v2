// import Image from "next/image";
"use client"
import {
  Container,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import AboutMe from "./components/Kit-Pyles-about-me";
import Skills from "./components/Kit-Pyles-skills";
import Projects from "./components/Kit-Pyles-projects";
import Education from "./components/Kit-Pyles-education";
import Goals from "./components/Kit-Pyles-goals";
import Contact from "./components/Kit-Pyles-contact";
import ResponsiveAppBar from "./components/menu";

// TODO: Plan & build page.
// TODO: About Me comp
// TODO: Skills comp
// TODO: Projects comp
// TODO: Education comp
// TODO: Goals comp
// TODO: Contact comp

export default function Home() {
  const light = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
    palette: {
      primary: {
        main: "#774c60",
      },
      secondary: {
        main: "#086375",
      },
      text: {
        primary: "#4a5240",
      },
      background: {
        default: "#D5D3DA",
      },
    },
  });

  const dark = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
    palette: {
      primary: {
        main: "#774c60",
      },
      secondary: {
        main: "#086375",
      },
      background: {
        default: "#4a5240",
      },
      text: {
        primary: "#D5D3DA",
      },
    },
  });

  let theme = "light";

  const changeTheme = (e) => {
    if (theme === "light") {
      theme = "dark";
    } else if (theme === "dark") {
      theme = "light";
    }
    return theme;
  };

  return (
    <ThemeProvider theme = {theme}>
      <Container>
        <ResponsiveAppBar />
        <Typography fontFamily={"Poppins"} variant="h1" textAlign={"center"}>
          Coming Soon!
        </Typography>
        <Typography variant="h2" textAlign={"center"}>
          Portfolio version 2
        </Typography>
        <AboutMe />
        <Skills />
        <Projects />
        <Education />
        <Goals />
        <Contact />
      </Container>
    </ThemeProvider>
  );
}
