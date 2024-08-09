import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kit Pyles' Portfolio",
  description: "Personal web portfolio for Kit Pyles, a software engineer and web designer with a passion for inclusive, accessible design. Built using Next.js & Material UI.",
  keywords: "Kit Pyles, software engineer, web designer, web developer, accessibility, web accessibility, accessible website, inclusive, responsive web design, custom website design, website development, software development, web development, Kansas City, accessible web, Next.js developer, Next,js engineer, React.js developer, React.js engineer, Java developer, Java engineer, JavaScript developer, JavaScript engineer, website design, web page design, webpage designer, website design & development, website design and development, website page design, ",
  author: "Kit Pyles",
  robots: "index, follow, max-snippet:-1, max-video-preview:-1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-FNHYCV0JT6"
  ></script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
