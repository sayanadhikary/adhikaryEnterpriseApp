'use client'

import { useStorage } from "@/zustand/store"
import Link from "next/link";

export default function OrderConfirmPage({params}){
    const orderId = params.orderSuccess;
    const emptyCart = useStorage((state) => state.clearCart)
    emptyCart();
    return (
        <>
<div className="flex flex-col items-center justify-center min-h-screen py-12 space-y-4 md:py-24">
  <div className="flex flex-col items-center justify-center space-y-2">
  <svg className="animate-pulse" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#ccff90" d="M34.602,14.602L21,28.199l-5.602-5.598l-2.797,2.797L21,33.801l16.398-16.402L34.602,14.602z"></path>
</svg>
    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Order successful</h1>
    <p className="max-w-[600px] text-center text-gray-500 md:text-xl/relaxed dark:text-gray-400">
      Your order has been confirmed and is now being processed. Thank you for shopping with us.
    </p>
  </div>
  <p className="px-2">Order id: {orderId}</p>
  <div className="flex flex-col gap-2 min-[400px]:flex-row">
    <Link
      className="p-2 flex-1 inline-flex items-center justify-center rounded-md border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
      href="/"
      rel="ugc"
    >
      Continue shopping
    </Link>
  </div>
</div>
        </>
    )
}