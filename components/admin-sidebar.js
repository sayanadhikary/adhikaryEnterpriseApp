import Link from "next/link"
import ToastMsg from "./toast"

export default function AdminSidebar(){
    return (
        <>
            <ul className="w-1/6 fixed left-0 top-24 p-8 text-center"> 
            <ToastMsg />           
               <Link href={"/admin"}><li className="border-b-2 py-4">Orders</li></Link> 
               <Link href={"/admin/products"}><li className="border-b-2 py-4">Products</li></Link> 
               <Link href={"/admin/users"}><li className="border-b-2 py-4">Users</li></Link> 
               <Link href={"/admin/categories"}><li className="border-b-2 py-4">Categories & Brands</li></Link>                
            </ul>
        </>
    )
}