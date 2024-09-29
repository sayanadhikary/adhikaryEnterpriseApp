import Link from "next/link";
import Image from "next/image";
import { getOrderById } from "@/lib/sqldatabase";

export default async function OrderDetailsPage({params}){

const orderId = params.orderDetailsId;
const orderArray = await getOrderById(orderId);
const order = orderArray[0];
const cartArray = order.order_details.cartDetails;

    return (
        <>
        <section className="bg-white py-8 my-16 antialiased dark:bg-gray-900 md:py-16">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div className="mx-auto max-w-3xl">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Order details</h2>

      
<dl className="mt-6 max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
<div className="flex flex-col pb-3">
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
                    <Link href={`/allproducts/${product.id}`} className="flex items-center aspect-square w-10 h-10 shrink-0">
                      <Image width={100} height={100} className="h-auto w-full max-h-full dark:hidden" src={product.image} alt="Product image" />
                      <Image width={100} height={100} className="hidden h-auto w-full max-h-full dark:block" src={product.image} alt="Product image" />
                    </Link>
                    <Link href={`/allproducts/${product.id}`} className="hover:underline">{product.name.substr(0,18)}...</Link>
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
            <Link href={"/"}>
            <button type="button" className="w-full rounded-lg  border border-gray-200 bg-white px-5  py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">Return to Shopping</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}