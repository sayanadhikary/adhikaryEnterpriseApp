import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import BottomNavigation from "@/components/bottom-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adhikary Enterprise",
  description: "Wholesale shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <BottomNavigation />
        </body>
    </html>
  );
}
