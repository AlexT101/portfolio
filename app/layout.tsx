import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import './index.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: "AlexT",
  description: "Alex Thummalapalli's Portfolio Website",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
