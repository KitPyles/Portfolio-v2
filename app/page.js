"use client";

import {
  Box,
  Container,
  CssBaseline,
  List,
  ListItem,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "./theme";
import { featuredProjects } from "./projects/projects";
import ProjectCard from "./components/ProjectCard";
import TypewriterEffect from "./components/TypewriterEffect";

// TODO: Plan & build page.

export default function Home() {
  return (
    <Container>
      <Typography variant="h1" textAlign={"center"}>
        Kit Pyles
      </Typography>
      <Typography
        variant="h4"
        textAlign={"center"}
        color={theme.palette.text.secondary}
      >
        Part code whisperer, part puzzle solver, always caffeinated
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ fontSize: "25px", color: theme.palette.text.secondary }}
      >
        <Typography variant="" sx={{ color: theme.palette.text.primary }}>
          I am&nbsp;
        </Typography>
        <TypewriterEffect />
      </Box>
      <Container>
        <Typography sx={{ textAlign: "center" }}>
          <i>Portfolio 2.0 is still under development.</i>
        </Typography>
      </Container>
      <Container
        sx={{
          border: "2px solid white",
          borderRadius: "30px",
          width: "93.5%",
          marginTop: 1,
        }}
      >
        <Typography sx={{ marginBottom: 2 }}>
          <strong>Welcome!</strong>
          <br />
          I'm Kit, a software engineer who loves turning complex problems into
          clean, functional solutions. Whether it's building applications,
          optimizing user experiences, or advocating for accessibility, I'm
          always learning and pushing the boundaries of what's possible. Take a
          look around to see my projects, learn more about my skills, and let's
          connect!
        </Typography>
        <Typography>
          <strong>What I Do</strong>
          <br />I specialize in creating web applications that are both
          functional & accessible. From front-end development to back-end
          integration, I aim to deliver seamless digital experiences. My skills
          include:
        </Typography>
        <List sx={{ listStyleType: "disc", paddingLeft: 2, marginBottom: 2 }}>
          <ListItem sx={{ display: "list-item" }}>
            Full-stack development with JavaScript, TypeScript, & Java
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Building efficient, user-friendly databases with MySQL
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Accessibility-first design & testing
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            Front-end development using NextJS, React, & Material UI
          </ListItem>
        </List>
        <Container>
          <Typography>
            <strong>Featured Projects</strong>
            <br />
          </Typography>
          <Container
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"left"}
          >
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
