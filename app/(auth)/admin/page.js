import { getAllOrders } from "@/lib/sqldatabase";
import Link from "next/link";

export default async function OrdersPage(){
    const ordersArr = await getAllOrders();
    const orders= ordersArr.reverse();    

return (        
        <>
        <h1 className="text-center mt-20 mb-4">Orders</h1>     
<div className="overflow-x-auto ml-72 mb-16">
    <table className="w-5/6 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Order Id
                </th>
                <th scope="col" className="px-6 py-3">
                    date & time
                </th>
                <th scope="col" className="px-6 py-3">
                    Customer name
                </th>
                <th scope="col" className="px-6 py-3">
                    Total amount
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
            {orders.map(order=>(
            <tr key={order.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   <Link href={`/admin/${order.id}`}>{order.id}</Link> 
                </th>
                <td className="px-6 py-4">
                    {new Date(order.created_at).getDate()}-{new Date(order.created_at).getMonth()}-{new Date(order.created_at).getFullYear()} at {new Date(order.created_at).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
                </td>
                <td className="px-6 py-4">
                    {order.order_details.userDetails.first_name} {order.order_details.userDetails.last_name}
                </td>
                <td className="px-6 py-4">
                    {order.order_details.totalValue}
                </td>
                <td className="px-6 py-4">
                    {order.status.split('@')[0]}
                </td>
            </tr>
            ))}
            
            
        </tbody>
    </table>
</div>

        </>
    )
}