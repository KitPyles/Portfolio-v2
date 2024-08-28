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
        fontFamily: poppins.style.fontFamily,
    }
});

export default theme;