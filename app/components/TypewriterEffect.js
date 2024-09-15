import Typewriter from "typewriter-effect";

export default function TypewriterEffect() {
  return (
    <Typewriter
      options={{
        strings: [
          "a gamer.",
          "a reader.",
          "a tester.",
          "an accessibility tester.",
          "an accessibility advocate.",
          "a software engineer",
          "a web developer.",
          "a crafter.",
          "a Renaissance Faire vendor.",
          "always learning.",
          "an escape room escapee.",
          "a work in progress.",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
}