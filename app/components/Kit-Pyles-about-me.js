import Image from "next/image";
import { Container, Typography, Stack, Box } from "@mui/material";

// TODO: Plan & build About Me component.
// TODO: Figure out how to display avatar img here.
// TODO: Write brief autobiography. Make it engaging & amusing.

export default function AboutMe() {
  return (
    <Container>
      <Typography variant="h2" textAlign={"left"}>ABOUT ME COMPONENT</Typography>
      <Stack
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"left"}
          alignItems={"center"}
        >
        <Box
          sx={{
            display: "block",
            borderRadius: "100%",
            overflow: "hidden",
            width: "180px"
          }}
        >
          <Image
            src="/Kit-Pyles-avatar.jpg"
            alt="Portrait of Kit Pyles, a caucasian female with curly auburn hair, wearing glasses, smiling, looking into the camera, & standing into from of a white-painted wooden wall"
            width={180}
            height={225}
          />
        </Box>
        <Box
          width={"80%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          margin={2}
        >
          <Typography variant="h4">About Me...(make more punchy)</Typography>
          <Typography variant="p">This is a test to see if my About Me component is rendering correctly.</Typography>
        </Box>
        </Stack>
    </Container>
  );
}
