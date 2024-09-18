"use client";

import { Container, Typography } from "@mui/material";
import theme from "../theme";
import Typewriter from "typewriter-effect";

// TODO: Plan & build About Me component.
// TODO: Figure out how to display avatar img here.
// TODO: Write brief autobiography. Make it engaging & amusing.

export default function About() {
  return (
    <Container
      sx={{
        border: "2px solid white",
        borderRadius: "30px",
        width: "93.5%",
        marginTop: 1,
      }}
    >
      <Typography>
        Hi, I’m Kit Pyles! With a background in English & Psychology, I bring a
        unique perspective to software engineering, combining creativity with
        analytical problem-solving. My journey into tech may not be
        conventional, but it’s driven by a passion for learning & making
        technology more inclusive.<br/><br/>
      </Typography>
      <Typography>
        I’m an active member of Kansas City Women in Technology (KCWIT), where I
        help coordinate DjangoFest KC alongside an amazing committee of
        volunteers. DjangoFest KC is an event dedicated to introducing
        developers to the world of Python & Django. Whether you're completely
        new to coding or have experience in other frameworks, DjangoFest KC
        provides an opportunity to dive into Python’s powerful ecosystem while
        learning the fundamentals of web development through Django. It’s a
        space for collaboration, hands-on learning, & expanding your skillset in
        a supportive environment.<br/><br/>
      </Typography>
      <Typography>
        When I’m not knee-deep in code, you can find me indulging my love for
        creative outlets & strategic challenges. I help my husband in his
        handmade leather goods business, assisting both in crafting products &
        selling them at events, like conventions & Renaissance Festivals.
        These events combine our passion for history, craftsmanship, &
        community, offering a unique experience that we look forward to every
        season. I’m also an avid gamer, playing everything from narrative-driven
        RPGs to competitive games on my PC & my PlayStation 4, & I love testing
        my problem-solving skills in escape rooms—always on the lookout for the
        next challenge to solve!<br/><br/>
      </Typography>
      <Typography>
        Accessibility is a core focus of my work, & I’m passionate about
        creating websites that are inclusive to all users, regardless of
        ability. I firmly believe that the web should be a place where everyone
        can engage equally, & I’m always learning new ways to implement WCAG
        standards to improve user experience for those with disabilities. My
        goal is to continue developing my expertise in accessibility, making
        every project more user-friendly & barrier-free.
      </Typography>
    </Container>
  );
}
