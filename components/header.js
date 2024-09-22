import Link from "next/link"
import Image from "next/image"
import Search from "./search"

export default function Header({greetings}){   
    return (
    <> 
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-xl fixed top-0 left-0 right-0 z-10"> 
    <div className="flex justify-between text-white">
        <Link className="flex p-1" href={"/"}>
        <Image className="mx-1" src={"/vercel.svg"} alt="Logo" width={22} height={20} />
         Adhikary Enterprise</Link>         
         <Link className="p-2 text-xs font-extralight" href={"/"}>{greetings}</Link>
         </div>
         <Search /> 
        </div>  
    </>
    )
}