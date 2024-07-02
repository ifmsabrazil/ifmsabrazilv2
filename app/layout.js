import React from 'react';
import { CssBaseline } from '@mui/material';
import "../styles/Fonts.js";
import GlobalStyles from '../styles/GlobalStyles';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: "IFMSA Brazil",
  description: "Estudantes de medicina que fazem a diferença",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <GlobalStyles />
        <CssBaseline />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
