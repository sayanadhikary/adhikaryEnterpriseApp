import Link from "next/link"
import Image from "next/image"

export default function Header(){
    return <>
    <div className="flex justify-between bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-t-xl fixed top-0 left-0 right-0">
        <Link className="flex p-2" href={"/"}>
        <Image className="mx-1" src={"/vercel.svg"} alt="Logo" width={22} height={20} />
         Adhikary Enterprise</Link>
    </div>
    </>
}