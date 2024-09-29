import { getOrdersByUserId } from "@/lib/sqldatabase";
import Image from "next/image"
import Link from "next/link"

export default async function AllOrdersPage({params}){

const userId = params.allorders;
const ordersArray = await getOrdersByUserId(userId);
const orders = ordersArray.reverse()

    return (
        <>        
<ul className="my-20 mx-auto max-w-md divide-y divide-gray-200 dark:divide-gray-700">
   {orders.map(order=> (
      <li key={order.id} className="p-4 sm:p-5">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
         <div className="flex-shrink-0">
            <Image width={100} height={100} className="w-14 h-14 rounded-full" src={order.order_details.cartDetails[0].image} alt="Neil image" />
         </div>
         <div className="flex-1 min-w-0">
            <Link href={`/user/${userId}/${order.id}`} className="p-1 text-sm font-medium text-gray-900 truncate dark:text-white">{order.id.substr(0, 22)}...               
            </Link>
            <p className="p-1 text-sm text-gray-500 truncate dark:text-gray-400">
               Date: {new Date(order.created_at).getDate()}-{["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][new Date(order.created_at).getMonth()]}-{new Date(order.created_at).getFullYear()} at {new Date(order.created_at).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
            </p>
            <p className="p-1 text-sm text-gray-500 truncate dark:text-gray-400">
               {order.status.split('@')[0]}
            </p>
         </div>
         <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
         ₹{order.order_details.totalValue}
         </div>
      </div>
   </li>
   ))}
   
   
</ul>

        </>
    )
}