import Link from "next/link"

export default function Header(){
    return <>
    <div className="flex justify-between bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-t-xl fixed top-0 left-0 right-0">
        <Link className="p-2 " href={"/"}>Adhikary Enterprise</Link>
    </div>
    </>
}