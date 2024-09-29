import AdminSidebar from "@/components/admin-sidebar"
import { verifyAuth } from "@/lib/lucia-auth"
import { getUserById } from "@/lib/sqldatabase";
import { redirect } from "next/navigation";
import { notFound } from 'next/navigation'

export default async function AdminLayout({ children }){

const adminKey = process.env.ADMIN_KEY

const result = await verifyAuth();

if(!result.user){
    return redirect("/login")
}
const userId = result.user.id;
const authUser = await getUserById(userId);
const key = authUser[0].phone_number

if(key !== adminKey){
    notFound()
}

    return (
        <>        
        <AdminSidebar />        
        {children}       
        </>
    )
}