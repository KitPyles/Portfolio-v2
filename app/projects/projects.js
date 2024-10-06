import { teal } from "@mui/material/colors";

let portfolio2 = {
    id: "portfolio2",
    name: "Portfolio 2.0",
    description: "This multi-page personal portfolio website showcases my skills, experience, and projects as a software engineer & web developer. It features a clean, responsive design and intuitive navigation to give visitors a clear sense of my capabilities.",
    role: "Designer, Tester, Front-End Developer, Back-End Developer",
    tech: "Next.js, Node.js, Typewriter.js, Material UI",
    url: "https://www.kitpyles.com"
};
let portfolio = {
    id: "portfolio",
    name: "Portfolio",
    description: "Built a single-page application using a free HTML template from HTML5Up. Customized the design by adjusting colors, font face, & content to reflect my personal brand.",
    role: "Full-Stack Developer, Tester",
    tech: "HTML, CSS, Node.js",
    url: "#"
};
let chatbot = {
    id: "chatbot",
    name: "Kit & Christine's Chatbot",
    description: "A general AI chatbot built with Google GenerativeAI (Gemini) on the backend.",
    role: "Full-Stack Developer, Tester",
    tech: "Next.js, Node.js, Material UI, Google GenerativeAI API integration",
    url: "https://chatbot.kitpyles.com"
};
let arcade = {
    id: "arcade",
    name: "JavaScript Arcade",
    description: "Focused on function over form, this WIP features 7 classic games.",
    role: "Full-Stack Developer, Tester",
    tech: "Node.js, HTML, CSS",
    url: "https://arcade.kitpyles.com"
}
let healthehub = {
    id: "health-ehub",
    name: "Health eHub",
    description: "Team capstone project from my Launchcode Web Development bootcamp. We designed everything from scratch as a team, then ran the project ourselves using Agile & Scrum principles & methodologies. We wanted to create a tool to help people reclaim ownership of their personal health data, without tying it to a pre-existing, doctor-centric patient portal. The app would allow users to enter & maintain their own data, regardless of the platform(s) their doctors choose to use for a patient portal.",
    role: "Full-Stack Developer, Designer, Tester, Project Manager, Product Manager",
    tech: "Java, SpringBoot, Spring Security, Thymeleaf, HTML, CSS",
    url: "#"
}
let allProjects = [
    portfolio, portfolio2, chatbot, arcade, healthehub
]
let featuredProjects = [
    portfolio2
]

export {allProjects, featuredProjects};