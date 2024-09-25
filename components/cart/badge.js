'use client'

import { useStorage } from "@/zustand/store"

export default function CartBadge(){

    const cartArray = useStorage((state) => state.cart);
const totalProduct = cartArray.reduce((a, c) => (+a) + (+c.quantity), 0);

    return (
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white rounded-full top-0.5 end-14">{totalProduct>0 && totalProduct}</div>
    )
}