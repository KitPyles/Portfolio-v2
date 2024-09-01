

// TODO: Plan & build Education component. Create object array to hold data. Iterate through array to populate cards.

import { Container, Typography } from "@mui/material"

// TODO: LaunchCode. Overview of Web Dev bootcamp. Button link to launchcode.org.
const launchcode = {
    name: "LaunchCode",
    description: "",
    url: "https://www.launchcode.org"
  }
  // TODO: Salem College. Brief overview of the school. Mention of completing 2 BAs in 4 years. Button link to salem.edu.

export default function Education() {
  return (
    <Container>
      <Typography variant="h2" textAlign={"center"}>
        Education & Certifications
      </Typography>
      <Typography>
        To be continued...
      </Typography>
    </Container>
  )
}