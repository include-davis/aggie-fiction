import Header from "./_components/Header/Header";
import Footer from "./_components/Footer/Footer";
import "./_globals/globals.scss";
import React from "react";
import { Poppins } from "next/font/google";
/* eslint-disable react/prop-types */

export const metadata = {
  title: "Aggie Fiction",
  description: "Creative writing club at UC Davis for writers of all levels and experiences.",
  keywords: "aggie fiction, aggie fiction at ucd, uc davis, ucd aggie fiction, creative writing, creative writing club, writing club, fiction writing, writing organization, creative writing organization, aggie writing, aggie creative writing, uc davis club, writing club sacramento, creative writing sacramento, creative writing ucd, ucd creative writing, creative writing davis, uc davis club, ucd club",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700" ],
  variable: "--font1",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
