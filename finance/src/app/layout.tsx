import Providers from "./Providers";
import Footer from "./components/layout/Footer";

import Nav from "./components/layout/Nav";
import "./globals.css";
import { Inter } from "next/font/google";
import Input from "./components/inputs/Input";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Nav />

          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
