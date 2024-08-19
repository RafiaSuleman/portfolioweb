import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Georama } from "next/font/google";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });
import PageTransition from '../components/ui/PageTransition'
import StairTransition from '../components/ui/StairTransition'

const Georama_language = Georama({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-Georama",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <StairTransition/>
        <PageTransition> {children}</PageTransition>
       
      </body>
    </html>
  );
}
