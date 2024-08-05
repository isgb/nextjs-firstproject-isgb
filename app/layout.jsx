import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My First Next App",
  description: "Generated by create next app",
  keywords: "next, react, app",
};

// https://www.youtube.com/watch?v=H_s-xM6Ii1g&list=PLo5lAe9kQrwqPBOPX_Usxe123P_-VngDn&index=15
// 36:28 / 1:01:04

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation/>
        {children}
      </body>
    </html>
  );
}
