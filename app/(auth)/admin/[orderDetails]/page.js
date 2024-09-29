import Link from "next/link";
import Image from "next/image";
import { getOrderById } from "@/lib/sqldatabase";
import { updateStatus } from "@/lib/actions";

export default async function AdminOrderDetailsPage({params}){

const orderId = params.orderDetails;
const orderArray = await getOrderById(orderId);
const order = orderArray[0];
const cartArray = order.order_details.cartDetails;
const delivered = "Delivered";
const cancelled = "Cancelled"

    return (
        <>
        <section className="bg-white py-8 my-16 antialiased dark:bg-gray-900 md:py-16">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div className="mx-auto max-w-3xl">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Order details</h2>

      
<dl className="mt-6 max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
<div className="flex flex-col py-3">
        <dt className="mb-1 text-gray-500 md:text-base dark:text-gray-400">Order id</dt>
        <dd className="text-base font-normal">{order.id}</dd>
    </div>
    <div className="flex flex-col pb-3">
        <dt className="mb-1 text-gray-500 md:text-base dark:text-gray-400">Date of order</dt>
        <dd className="text-base font-normal">{new Date(order.created_at).getDate()}-{["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][new Date(order.created_at).getMonth()]}-{new Date(order.created_at).getFullYear()} at {new Date(order.created_at).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</dd>
    </div>
    <div className="flex flex-col py-3">
        <dt className="mb-1 text-gray-500 md:text-base dark:text-gray-400">Payment method</dt>
        <dd className="text-base font-normal">{order.order_details.paymentMethod}</dd>
    </div>
    <div className="flex flex-col pt-3">
        <dt className="mb-1 text-gray-500 md:text-base dark:text-gray-400">Order status</dt>
        <dd className="text-base font-normal"><p className="text-xs font-thin">{order.status.split('@')[1]}</p><p>{order.status.split('@')[0]}</p></dd>
    </div>
</dl>


      <div className="mt-6 space-y-4 border-b border-t border-gray-200 py-8 dark:border-gray-700 sm:mt-8">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Billing & Delivery information</h4>

        <dl>
          <dt className="text-base font-medium text-gray-900 dark:text-white">{order.order_details.userDetails.first_name} {order.order_details.userDetails.last_name}</dt>
          <dd className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">{order.order_details.userDetails.address}</dd>
          <dd className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">{order.order_details.userDetails.phone_number}</dd>
        </dl>
        
      </div>

      <div className="mt-6 sm:mt-8">
        <div className="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
          <table className="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {cartArray.map(product=>(
                <tr key={product.id}>
                <td className="whitespace-nowrap py-4 md:w-[384px]">
                  <div className="flex items-center gap-4">
                    <Link href="#" className="flex items-center aspect-square w-10 h-10 shrink-0">
                      <Image width={100} height={100} className="h-auto w-full max-h-full dark:hidden" src={product.image} alt="Product image" />
                      <Image width={100} height={100} className="hidden h-auto w-full max-h-full dark:block" src={product.image} alt="Product image" />
                    </Link>
                    <Link href="#" className="hover:underline">{product.name.substr(0,25)}</Link>
                  </div>
                </td>
                <td className="p-4 text-base font-normal text-gray-900 dark:text-white">x{product.quantity}</td>
                <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">{product.price*product.quantity}</td>
              </tr>
              ))}
              

            </tbody>
          </table>
        </div>

        <div className="mt-4 space-y-6">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</h4>

          <div className="space-y-4">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-gray-500 dark:text-gray-400">Original price</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">₹{order.order_details.totalValue}</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-gray-500 dark:text-gray-400">Savings</dt>
                <dd className="text-base font-medium text-green-500">₹0
                </dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-gray-500 dark:text-gray-400">Store Pickup</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">₹0</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-gray-500 dark:text-gray-400">Tax</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">₹0</dd>
              </dl>
            </div>

            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt className="text-lg font-bold text-gray-900 dark:text-white">Total</dt>
              <dd className="text-lg font-bold text-gray-900 dark:text-white">₹{order.order_details.totalValue}</dd>
            </dl>
          </div>      

          <div className="gap-4 sm:flex sm:items-center">
            <form action={updateStatus.bind(null, order.id)}>
            <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="orderStatus" id="orderStatus" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="orderStatus" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Order status</label>
    </div> 
          <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Update order status</button>
            </form>
          {/* <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Cancel order</button> */}
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}