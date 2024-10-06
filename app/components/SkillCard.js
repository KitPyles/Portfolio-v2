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

// TODO: Figure out how I want to format the Skill cards on the page.

export default function SkillCard({ skill }) {
    return (
        <Box
            display={"flex"}
            flexWrap={"wrap"}
        >
            <Card
                sx={{
                    backgroundColor: "rgba(21, 112, 122, 1)",
                    width: "20vw",
                    marginRight: 1,
                    marginBottom: 1
                }}>
                <CardContent>
                    <Typography variant="h5">
                        <strong>{skill.name}</strong>
                    </Typography>
                    <Typography>
                        <strong>Experience:&nbsp;&nbsp;</strong>
                        {skill.experience}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}