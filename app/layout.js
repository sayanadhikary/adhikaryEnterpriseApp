import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import BottomNavigation from "@/components/bottom-nav";
import { verifyAuth } from "@/lib/lucia-auth";
import Link from "next/link";
import { getUserById } from "@/lib/sqldatabase";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adhikary Enterprise",
  description: "Wholesale shop",
};

export default async function RootLayout({ children }) {
  
  let greetingText;
  let authUser;
  const result = await verifyAuth();

  if (result.user){
    const userId = result.user.id;
    authUser = await getUserById(userId); 
    greetingText = "Hello, " + authUser[0].first_name + " " + authUser[0].last_name
  }else{
    greetingText = "Hello, Login"
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header greetings={greetingText} />
        {children}
        {result.user ? <BottomNavigation newUser={authUser} /> : <Link href={'/login'} className="fixed bottom-0 left-0 z-50 w-full text-center bg-slate-500">Please login</Link> }   
        
        </body>
    </html>
  );
}
