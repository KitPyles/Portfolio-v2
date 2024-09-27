import {
    Card,
    CardContent,
    CardHeader,
    CardActions,
    Typography,
    Button,
    Container,
  } from "@mui/material";
import { frontend } from "../skills/skills";

export default function FrontEndCards() {
    return(
        <Container
        >
        {frontend.map((skill) =>
            <Card
            sx={{
                backgroundColor: "rgba(21, 112, 122, 1)",
                maxWidth: "20vw",
                m: 1,
                p: 1
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
        )}
        </Container>
    )
}