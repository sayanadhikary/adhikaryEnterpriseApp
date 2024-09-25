'use client'

import { useStorage } from "@/zustand/store"

export default function AddToCart({product}){

    let arrForCart = [{...product, ...{quantity: 1}}];
    function setQuantity(e){
        const qty = e.target.value;
        arrForCart = [{...product, ...{quantity: qty}}]          
    }

    const cartArray = useStorage((state) => state.cart);
    const addToCart = useStorage((state) => state.addProductToCart);
    const found = cartArray.find((element)=> element.id == product.id)

    return (
        <>
             <div className="relative z-0 w-full my-5 group">
      <input onChange={(e)=>setQuantity(e)} type="number" name="quantity" id="quantity" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="quantity" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Quantity</label>
  </div>
        <button onClick={()=> addToCart(arrForCart)} type="button" disabled={found} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{found ? "Product added to cart" : "🛒 Add to cart"}</button>
        </>
    )
}