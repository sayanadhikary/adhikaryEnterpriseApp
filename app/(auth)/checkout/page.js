'use client'

import { useState } from "react";
import { useStorage } from "@/zustand/store";

import Link from "next/link"
import Image from "next/image"
import { placeOrder } from "@/lib/actions";

export default function CheckoutPage(){

const [paymentOption, setPaymentOption] = useState("COD");
const user = useStorage((state) => state.user)[0];
const cart= useStorage((state) => state.cart);

const priceArr = cart.map(prod=>{
  return prod.price*prod.quantity
})
const totalPrice = priceArr.reduce((a, c)=> a+c, 0)

function handleChange(e){
  setPaymentOption(e.target.value);
}

const orderDetails = {
  userDetails: user,
  cartDetails: cart,
  paymentMethod: paymentOption,
  totalValue: totalPrice
}
const status = "Not Delivered"

    return (
        <>
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 my-16">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div className="mx-auto max-w-3xl">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Order summary</h2>
    
<form className="max-w-sm mt-6">
  <label htmlFor="payment" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Select payment option</label>
  <select id="paymentOption" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option defaultValue="Cash on delivery">Cash on delivery</option>
    <option value="pay Later">On credit (Pay later)</option>
    <option disabled value="PayNow">Pay now (Currently not available)</option>    
  </select>
</form>


      <div className="mt-6 space-y-4 border-b border-t border-gray-200 py-8 dark:border-gray-700 sm:mt-8">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Billing & Delivery information</h4>

        <dl>
          <dt className="text-base font-medium text-gray-900 dark:text-white">{user && user.first_name} {user && user.last_name}</dt>
          <dd className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">{user && user.address}</dd>
          <dd className="mt-1 text-base font-normal text-gray-500 dark:text-gray-400">Phone number: {user && user.phone_number}</dd>
        </dl>        
      </div>

      <button type="button" onClick={()=>placeOrder(user.id, orderDetails, status)} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Place order</button>

      <div className="mt-6 sm:mt-8">
        <div className="relative overflow-x-auto border-b border-gray-200 dark:border-gray-800">
          <table className="w-full text-left font-medium text-gray-900 dark:text-white md:table-fixed">
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">

              {cart.map(product => 
                  <tr key={product.id}>
                  <td className="whitespace-nowrap py-4 md:w-[384px]">
                    <div className="flex items-center gap-4">
                    <Link href="#" className="flex items-center aspect-square w-10 h-10 shrink-0">
                        <Image width={100} height={100} className="h-auto w-full max-h-full dark:hidden" src={product.image} alt={product.name} />
                        <Image width={100} height={100} className="hidden h-auto w-full max-h-full dark:block" src={product.image} alt="imac image" />
                      </Link>
                      <Link href="#" className="hover:underline">{product.name}</Link>
                    </div>
                  </td>
                  <td className="p-4 text-base font-normal text-gray-900 dark:text-white">x{product.quantity}</td>
                  <td className="p-4 text-right text-base font-bold text-gray-900 dark:text-white">₹{product.price*product.quantity}</td>
                </tr>
              )}                        
             
            </tbody>
          </table>
        </div>

        <div className="mt-4 space-y-6">
          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Order summary</h4>

          <div className="space-y-4">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-gray-500 dark:text-gray-400">Original price</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">₹{totalPrice}</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-gray-500 dark:text-gray-400">Savings</dt>
                <dd className="text-base font-medium text-green-500">₹0</dd>
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
              <dd className="text-lg font-bold text-gray-900 dark:text-white">₹{totalPrice}</dd>
            </dl>
          </div>        

          <div className="gap-4 sm:flex sm:items-center">
           
          <button type="button" onClick={()=>placeOrder(user.id, orderDetails, status)} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Place order</button>
        
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 </>
    )
}