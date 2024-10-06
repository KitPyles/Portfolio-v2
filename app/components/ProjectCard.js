import theme from "../theme";
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";
import { allProjects, featuredProjects } from "../projects/projects";

export default function ProjectCard({ project }) {
  return (
    <Box
      display={"flex"}
      flexWrap={"wrap"}
    >
      <Card sx={{
        backgroundColor: "rgba(117, 38, 126, 0.647)",
        maxHeight: "50vh",
        width: "20vw",
        marginRight: 1,
        marginBottom: 1,
        overflow: "auto"
      }}>
        <CardContent>
            <Typography variant="h5">
                <strong>{project.name}</strong>
            </Typography>
          <Typography>
            <strong>Description:&nbsp;&nbsp;</strong>
            {project.description}
          </Typography>
          <Typography>
            <strong>Role(s):&nbsp;&nbsp;</strong>
            {project.role}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="outlined" sx={{ color: "#FFE085" }} href={project.url}>{project.url === "#" ? "Project is not currently live." : "Visit the live site!"}</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
