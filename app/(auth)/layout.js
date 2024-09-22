import { verifyAuth } from "@/lib/lucia-auth"
import { redirect } from "next/navigation"

export default async function AuthLayout({children}){

const result = await verifyAuth()
if(!result.user){
    return redirect("/login")
}
    return (
        <>
        {children}
        </>
    )
}