"use client"

import { Poppins } from "next/font/google";
import { createTheme } from "@mui/material";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // Adjust weights as needed
    style: ['normal', 'italic'], // Include styles if necessary
});

const theme = createTheme({
    typography: {
        fontFamily: poppins.style.fontFamily
    },
    palette: {
        primary: {
            main: "rgba(117, 38, 126, 0.647)"
        },
        secondary: {
            main: "rgba(21, 112, 122, 1)"
        },
        text: {
            primary: "#fff",
            secondary: "#FFE085"
        }
    }
});

export default theme;