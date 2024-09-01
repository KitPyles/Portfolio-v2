import "./globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Poppins } from 'next/font/google';
import ResponsiveAppBar from "./components/NavBar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata = {
  title: "Kit Pyles' Portfolio",
  description:
    "Personal web portfolio for Kit Pyles, a software engineer and web designer with a passion for inclusive, accessible design. Built using Next.js & Material UI.",
  keywords:
    "Kit Pyles, software engineer, web designer, web developer, accessibility, web accessibility, accessible website, inclusive, responsive web design, custom website design, website development, software development, web development, Kansas City, accessible web, Next.js developer, Next,js engineer, React.js developer, React.js engineer, Java developer, Java engineer, JavaScript developer, JavaScript engineer, website design, web page design, webpage designer, website design & development, website design and development, website page design, ",
  author: "Kit Pyles",
  robots: "index, follow, max-snippet:-1, max-video-preview:-1",
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <head></head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FNHYCV0JT6"
        ></script>
        <body>
          <div><ResponsiveAppBar /></div>
          <div>{children}</div>
        </body>
      </html>
    </ThemeProvider>
  );
}
