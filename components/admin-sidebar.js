import Link from "next/link"
export default function AdminSidebar(){
    return (
        <>
            <ul className="w-1/6 fixed left-0 top-24 p-8 text-center">
               <Link href={"/admin"}><li className="border-b-2 py-4">Orders</li></Link> 
               <Link href={"/admin/products"}><li className="border-b-2 py-4">Products</li></Link> 
               <Link href={"/"}><li className="border-b-2 py-4">Users</li></Link> 
               <Link href={"/"}><li className="border-b-2 py-4">Categories</li></Link> 
               <Link href={"/"}><li className="border-b-2 py-4">Brands</li></Link> 
            </ul>
        </>
    )
}