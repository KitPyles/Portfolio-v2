

// TODO: Plan & build Projects component. Array to populate cards. Buttons on bottom to link deployment (disabled if no link?) & GitHub repo.
// TODO: Portfolio v.2 (this project)
// TODO: Kit & Christine's ChatBot
// TODO: Portfolio v.1
// TODO: JS Arcade v.1 (to be updated ASAP)
// TODO: Health eHub

import { Box, Container, Typography } from "@mui/material";
import { allProjects } from "./projects";
import { featuredProjects } from "./projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
    return(
        <Container
      sx={{
        marginTop: 1,
        border: "2px solid white",
        borderRadius: "30px",
        width: "93.5%",
        marginTop: 1,
      }}
    >
            {/* <Typography variant="h1">Projects Page</Typography>
            <Typography>work in progress</Typography> */}
            <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"}>
                {allProjects.map((project) =>
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                )}
            </Box>
        </Container>
    )
}