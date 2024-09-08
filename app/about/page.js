"use client";

import theme from "../theme";
import Typewriter from "typewriter-effect";

// TODO: Plan & build About Me component.
// TODO: Figure out how to display avatar img here.
// TODO: Write brief autobiography. Make it engaging & amusing.

export default function About() {
  let iAmStrings = [
    "a gamer.",
    "a reader.",
    "a tester.",
    "an accessibility tester.",
    "a software engineer",
    "a web developer.",
    "a crafter.",
    "a Renaissance Faire vendor.",
    "always learning.",
  ];
  let randomStrings = [];
  for (let i = 0; (i = iAmStrings.length); i++) {
    randomStrings.push(iAmStrings[Math.floor(Math.random * iAmStrings.length)]);
  }

  return (
    <span style={{ color: theme.palette.text.secondary }}>${randomStrings}
      {/* <Typewriter
        options={{
          strings: randomStrings,
          autoStart: true,
          loop: true,
        }}
      /> */}
    </span>
  );
}
