import { Inter } from "next/font/google";
import "./globals.css";
import axios from "axios";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {

  const metadata = {
    title: "Movie Viewer",
    description: "Generated by create next app",
  };
  

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


