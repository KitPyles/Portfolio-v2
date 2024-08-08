import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kit Pyles' Portfolio",
  description: "Personal web portfolio for Kit Pyles, a software engineer and web designer with a passion for inclusive, accessible design. Built using Next.js & Material UI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
