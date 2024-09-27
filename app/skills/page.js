

// TODO: Plan & build Skills component.
// TODO: List skills in categories.
// TODO: Use icons for tech stack skills?

import { Box, Container, Typography } from "@mui/material";
import { frontend, backend, tools, testing, methods } from "../skills/skills";
import SkillCard from "../components/SkillCard";

export default function Skills() {
    return(
        <Container>
            <Typography variant="h1">Contact Page</Typography>
            <Typography>work in progress</Typography>
            <hr/>
            <Typography>
                <strong>Front-End Skills:</strong>
            </Typography>
            <Box
                // display={"flex"}
                // flexDirection={"row"}
                // flexWrap={"wrap"}
                // maxHeight={"100vh"}
                // maxWidth={"100vw"}
            >
                {frontend.map((skill) =>
                    <SkillCard
                        key={skill.id}
                        skill={skill}
                    />
                )}
            </Box>
        </Container>
    )
}