const { Container, Typography } = require("@mui/material");

// TODO: Plan & build Education component. Create object array to hold data. Iterate through array to populate cards.
// TODO: Headstarter. List technologies we've learned & will learn. Button link to website.
const headstarter = {
  name: "The Headstarter",
  description: "The Headstarter is a Fellowship program focused on building Python DSA skills, LLM skills, & a robust professional network. The accelerated program focuses on building hands-on projects to reinforce learned skills. Projects begin with a simple personal webpage using HTML & CSS, & increase in complexity by incorporating Next.js, Material UI, Firebase/Firestore, & OpenAI API integration.",
  url: "https://headstarter.co"
}
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
      <Typography>EDUCATION COMPONENT</Typography>
    </Container>
  );
}