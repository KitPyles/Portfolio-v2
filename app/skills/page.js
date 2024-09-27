// TODO: Plan & build Skills component.
// TODO: List skills in categories.
// TODO: Use icons for tech stack skills?

import { Box, Container, Typography } from "@mui/material";
import { frontend, backend, tools, testing, methods } from "../skills/skills";
import SkillCard from "../components/SkillCard";

export default function Skills() {
  return (
    <Container>
      <Typography variant="h1">Skills</Typography>
      <Typography>work in progress</Typography>
      <hr />
      <Container>
        <Typography variant="h4">
          <strong>Front-End Skills:</strong>
        </Typography>
        <Box display={"flex"} flexWrap={"wrap"}>
          {frontend.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </Box>
      </Container>
      <Container>
        <Typography variant="h4">
          <strong>Back-End Skills:</strong>
        </Typography>
        <Box display={"flex"} flexWrap={"wrap"}>
          {backend.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </Box>
      </Container>
      <Container>
        <Typography variant="h4">
          <strong>Technical Tools:</strong>
        </Typography>
        <Box display={"flex"} flexWrap={"wrap"}>
          {tools.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </Box>
      </Container>
      <Container>
        <Typography variant="h4">
          <strong>Testing/QA Skills:</strong>
        </Typography>
        <Box display={"flex"} flexWrap={"wrap"}>
          {testing.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </Box>
      </Container>
      <Container>
        <Typography variant="h4">
          <strong>Methodologies & Miscellaneous Skills:</strong>
        </Typography>
        <Box display={"flex"} flexWrap={"wrap"}>
          {methods.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </Box>
      </Container>
    </Container>
  );
}
