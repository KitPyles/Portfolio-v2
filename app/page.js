// import Image from "next/image";
"use client";
import {
  Container,
  Typography,
} from "@mui/material";
import AboutMe from "./components/Kit-Pyles-about-me";
import Skills from "./components/Kit-Pyles-skills";
import Projects from "./components/Kit-Pyles-projects";
import Education from "./components/Kit-Pyles-education";
import Goals from "./components/Kit-Pyles-goals";
import Contact from "./components/Kit-Pyles-contact";
import ResponsiveAppBar from "./components/NavBar";

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
  );
}
